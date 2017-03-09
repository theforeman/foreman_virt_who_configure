require 'test_plugin_helper'
module ForemanVirtWhoConfigure
  class OutputGeneratorTest < ActiveSupport::TestCase
    let(:config) { FactoryGirl.create(:virt_who_config) }
    let(:generator) { OutputGenerator.new(config) }
    let(:output) { generator.virt_who_output }

    describe 'filtering' do
      test 'it should not filter anything for unlimited configs' do
        assert_equal ForemanVirtWhoConfigure::Config::UNLIMITED, config.listing_mode.to_i
        assert_not_includes output, 'filter_hosts'
        assert_not_includes output, 'exclude_hosts'
      end

      test 'whitelisting should set filter_hosts directive' do
        config.listing_mode = ForemanVirtWhoConfigure::Config::WHITELIST
        config.whitelist = 'a.host'
        assert_includes output, 'filter_hosts=a.host'
      end

      test 'whitelisting should set exclude_hosts directive' do
        config.listing_mode = ForemanVirtWhoConfigure::Config::BLACKLIST
        config.blacklist = 'a.host'
        assert_includes output, 'exclude_hosts=a.host'
      end

      test 'filtering output is stripped' do
        config.listing_mode = ForemanVirtWhoConfigure::Config::WHITELIST
        config.whitelist = ' name '
        assert_includes output, 'filter_hosts=name'
      end

      test 'filtering output is stripped for multiple values as well' do
        config.listing_mode = ForemanVirtWhoConfigure::Config::WHITELIST
        config.whitelist = ' host1,host2  '
        assert_includes output, 'filter_hosts=host1,host2'
      end

      test 'filtering output new line characters are removed' do
        config.listing_mode = ForemanVirtWhoConfigure::Config::WHITELIST
        config.whitelist = "aaaa,bbb,\r\nccc,\r\n\r\nddd\r\n\r\neee"
        assert_includes output, 'filter_hosts=aaaa,bbb,ccc,dddeee'

        config.whitelist = "aaaa,bbb,\rccc,\n\r\nddd\neee"
        assert_includes output, 'filter_hosts=aaaa,bbb,ccc,dddeee'
      end
    end

    describe 'proxy attributes' do
      test 'it does not set any proxy attributes by default' do
        assert_nil config.proxy
        assert_nil config.no_proxy
        assert_not_includes output, 'http_proxy'
        assert_not_includes output, 'no_proxy'
      end

      test 'it configures proxy when set' do
        config.proxy = 'http://proxy.com'
        assert_includes output, 'http_proxy=http://proxy.com'
      end

      test 'it configures no_proxy when set' do
        config.no_proxy = '*'
        assert_includes output, 'no_proxy=*'
      end

      test 'proxy_strings prints both proxy and no proxy if present' do
        config.proxy = 'a'
        config.no_proxy = 'b'
        assert_includes generator.proxy_strings, "\nhttp_proxy=a"
        assert_includes generator.proxy_strings, "\nno_proxy=b"
      end

      test 'proxy_strings ignores empty string values' do
        config.proxy = ''
        config.no_proxy = ''
        assert_not_includes generator.proxy_strings, 'http_proxy'
        assert_not_includes generator.proxy_strings, 'no_proxy'
      end

      test 'proxy_strings removes any new line chars' do
        config.proxy = "\na\nb\nc\n"
        config.no_proxy = "\nx\ny\nz"
        assert_includes generator.proxy_strings, "\nhttp_proxy=abc"
        assert_includes generator.proxy_strings, "\nno_proxy=xyz"
      end
    end
  end
end

require 'test_plugin_helper'
module ForemanVirtWhoConfigure
  class OutputGeneratorTest < ActiveSupport::TestCase
    let(:config) { FactoryGirl.create(:virt_who_config) }
    let(:generator) { OutputGenerator.new(config) }
    let(:output) { generator.virt_who_output }

    describe 'filtering' do
      test 'it should not filter anything for unlimited configs' do
        assert_equal ForemanVirtWhoConfigure::Config::UNLIMITED, config.listing_mode.to_i
        assert_not_includes generator.virt_who_output, 'filter_hosts'
        assert_not_includes generator.virt_who_output, 'exclude_hosts'
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
  end
end

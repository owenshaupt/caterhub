require 'test_helper'

class Api::ModifiersControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_modifiers_create_url
    assert_response :success
  end

end

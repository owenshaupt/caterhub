# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_02_29_223624) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "companies", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "company_string"
    t.index ["name"], name: "index_companies_on_name"
  end

  create_table "menu_item_modifiers", force: :cascade do |t|
    t.bigint "menu_item_id", null: false
    t.bigint "modifier_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["menu_item_id", "modifier_id"], name: "index_menu_item_modifiers_on_menu_item_id_and_modifier_id", unique: true
    t.index ["menu_item_id"], name: "index_menu_item_modifiers_on_menu_item_id"
    t.index ["modifier_id"], name: "index_menu_item_modifiers_on_modifier_id"
  end

  create_table "menu_items", force: :cascade do |t|
    t.string "name", null: false
    t.integer "price", null: false
    t.integer "required_notice", null: false
    t.integer "company_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["company_id"], name: "index_menu_items_on_company_id"
  end

  create_table "modifiers", force: :cascade do |t|
    t.string "name", null: false
    t.integer "price", null: false
    t.integer "company_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["company_id"], name: "index_modifiers_on_company_id"
  end

  create_table "order_line_items", force: :cascade do |t|
    t.integer "order_id", null: false
    t.integer "menu_item_id", null: false
    t.integer "quantity", null: false
    t.integer "modifiers", default: [], array: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "order_menu_items", force: :cascade do |t|
    t.integer "order_id", null: false
    t.integer "menu_item_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "order_modifiers", force: :cascade do |t|
    t.integer "order_id", null: false
    t.integer "modifier_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "orders", force: :cascade do |t|
    t.string "contact_name", null: false
    t.string "contact_phone_number", null: false
    t.string "contact_email", null: false
    t.string "company_name"
    t.datetime "order_date", null: false
    t.datetime "fulfillment_date", null: false
    t.integer "total_price", null: false
    t.boolean "for_delivery", null: false
    t.string "special_instructions"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.integer "company_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["session_token"], name: "index_users_on_session_token"
  end

end

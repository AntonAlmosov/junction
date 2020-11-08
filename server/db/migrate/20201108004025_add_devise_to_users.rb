# frozen_string_literal: true

class AddDeviseToUsers < ActiveRecord::Migration[6.0]
  def self.up
    create_table :users do |t|
      t.string :email,              null: false, default: ""
      t.string :encrypted_password, null: false, default: ""

      t.string :name
      t.string :surname
      t.integer :character
      t.integer :conservatism
      t.integer :course_id

      t.string   :reset_password_token
      t.datetime :reset_password_sent_at

      t.datetime :remember_created_at
    end

    add_index :users, :email,                unique: true
    add_index :users, :reset_password_token, unique: true
  end
end

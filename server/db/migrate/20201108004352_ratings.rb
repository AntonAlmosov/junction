class Ratings < ActiveRecord::Migration[6.0]
  def change
    create_table :ratings do |t|
      t.integer :value
      t.integer :skill_id
      t.integer :user_id

      t.timestamps
    end
  end
end

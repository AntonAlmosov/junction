class Skills < ActiveRecord::Migration[6.0]
  def change
    create_table :skills do |t|
      t.string :name

      t.timestamps
    end
  end
end

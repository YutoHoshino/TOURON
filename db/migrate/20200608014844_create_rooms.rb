class CreateRooms < ActiveRecord::Migration[5.2]
  def change
    create_table :rooms do |t|
      t.string :name, null:false
      t.text :description
      t.integer :category_id, null: false
      t.string :period
      t.string :image
      t.timestamps
    end
  end
end

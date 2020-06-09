class CreateRooms < ActiveRecord::Migration[5.2]
  def change
    create_table :rooms do |t|
      t.string :image
      t.string :name, null:false
      t.text :description
      t.integer :category_id, null: false
      t.timestamps
    end
  end
end

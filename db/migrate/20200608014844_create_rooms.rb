class CreateRooms < ActiveRecord::Migration[5.2]
  def change
    create_table :rooms do |t|
      t.string :image
      t.string :name, null:false
      t.text :description
      t.timestamps
    end
  end
end

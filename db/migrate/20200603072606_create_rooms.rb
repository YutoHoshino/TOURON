class CreateRooms < ActiveRecord::Migration[5.2]
  def change
    create_table :rooms do |t|
      t.string  :name,   null: false, unique: true
      t.string  :password 
      t.string  :image
      t.timestamps
    end
  end
end

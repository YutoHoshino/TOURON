class CreateRooms < ActiveRecord::Migration[5.2]
  def change
    create_table :rooms do |t|
      t.string :name, null:false, unique:true
      t.text :password, null:false
      t.string :image
      # t.references :user, foreign_key: true
      t.timestamps
    end
  end
end
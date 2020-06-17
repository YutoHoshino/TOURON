class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.integer :user_id, null: false
      t.integer :room_id
  
      t.timestamps
  
      t.index :user_id
      t.index :room_id
      t.index [:user_id, :room_id], unique: true
    end
  end
end



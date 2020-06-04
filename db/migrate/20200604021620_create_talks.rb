class CreateTalks < ActiveRecord::Migration[5.2]
  def change
    create_table :talks do |t|
      t.text :text, null: false
      t.string :image
      t.timestamps
    end
  end
end
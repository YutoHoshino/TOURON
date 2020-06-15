class Room < ApplicationRecord

  extend ActiveHash::Associations::ActiveRecordExtensions
  belongs_to_active_hash :category

  has_many :talks
  has_many :room_users
  has_many :users, through: :room_users
  
  #親であるroomにタグ付する意味のエイリアス
  #これでtagテーブルにタグ情報を登録できる
  acts_as_taggable

  mount_uploader :image, ImageUploader

  validates :category_id, numericality: {only_integer: true, greater_than: 0, message: "を選択して下さい"}
  validates :name, length: { minimum: 1, maximum: 40, message: "は40文字以内で入力してください" }
  validates :description, length: { minimum: 1, maximum: 1000, message: "は1000文字以内で入力してください" }
  validates :image, presence: {message: "をアップロードして下さい"}
end

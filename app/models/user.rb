class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, password_length: 7..128 #devise元々のpasswordバリデーションを使用する

  has_many :talks
  has_many :rooms
  has_many :likes, dependent: :destroy
  has_many :like_rooms, through: :likes, source: :room

  mount_uploader :image, ImageUploader

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email, format: { with: VALID_EMAIL_REGEX }
  validates :username, presence: true, uniqueness: true

end

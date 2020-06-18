class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, password_length: 7..128 #devise元々のpasswordバリデーションを使用する

  has_many :talks
  has_many :room_users
  has_many :rooms, through: :room_users
  acts_as_followable 
  acts_as_follower
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email, format: { with: VALID_EMAIL_REGEX }
  validates :username, presence: true, uniqueness: true

end

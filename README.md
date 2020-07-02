# TOURON(コミュニケーションアプリ)

### URL

http://18.180.165.109/

## Basic 認証

user: touron<br>
password: the74

## テストアカウント

Email: test@gmail.com<br>
pass: testtest



### 使用技術
- Html(Haml)<br>
- CSS(SCSS)<br>
- Ruby 2.5.1<br>
- Ruby on Rails 5.2.3<br>
- JavaScript<br>
- jQuery<br>
- GitHub<br>
- AWS


### 機能一覧 

- ユーザ登録,ログイン機能全般
- トーク機能
- いいね機能
- フォロー機能
- 検索機能
- タイマー機能

# DB 設計
## ER図
[![Image from Gyazo](https://i.gyazo.com/67e21f3891f3327d2e876595f175cbde.png)](https://gyazo.com/67e21f3891f3327d2e876595f175cbde)

## users テーブル

| Column                 | Type      | Options                               |
| ---------------------- | --------- | ------------------------------------- |
| username               | string    | null: false, unique:true              |
| email                  | string    | null: false, unique:true, default: "" |
| encrypted_password     | string    | null: false, default: ""              |
| profile                | text      |                                       |
| image                  | string    |                                       |
| reset_password_token   | string    | unique:true                           |
| reset_password_sent_at | datetime  |                                       |
| remember_created_at    | datetime  |                                       |

### Association

- has_many :talks
- has_many :relationships
- has_many :followings, through: :relationships, source: :follow
- has_many :reverse_of_relationships, class_name: 'Relationship', foreign_key: 'follow_id'
- has_many :followers, through: :reverse_of_relationships, source: :user
- has_many :rooms
- has_many :likes, dependent: :destroy
- has_many :like_rooms, through: :likes, source: :room

## talks テーブル

| Column    | Type      | Options                        |
| --------- | --------- | ------------------------------ |
| text      | text      | null: false |
| image     | string    |                                |
| status_id | integer   |                                |
| user      | integer   | foreign_key: true              |
| room      | integer   | foreign_key: true              |

### Association

- belongs_to :user
- belongs_to :room

## rooms テーブル

| Column      | Type       | Options           |
| ----------- | ---------- | ----------------- |
| name        | string     | null: false       |
| description | text       | null: false       |
| category_id | integer    | null: false       |
| period      | string     | null: false       |
| image       | string     | null: false       |
| status      | string     |                   |
| user        | references | foreign_key: true |

### Association

- has_many :talks
- has_many :likes, dependent: :destroy
- belongs_to :user
- acts_as_taggable
- belongs_to_active_hash :category

## likes テーブル

| Column  | Type    | Options      |
| ------- | ------- | ------------ |
| user_id | integer | unique: true |
| room_id | integer | unique: true |

### Association

- belongs_to :user
- belongs_to :room

## relationships テーブル

| Column | Type      | Options                           |
| ------ | --------- | --------------------------------- |
| user   | reference | foreign_key: true                 |
| follow | reference | foreign_key: { to_table: :users } |

### Association

- belongs_to :user
- belongs_to :follow, class_name: 'User'


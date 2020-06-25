json.text @talk.text
json.created_at @talk.created_at.strftime("%Y年%m月%d日 %H時%M分")
json.status_id @talk.status_id
json.image @talk.image_url
json.user_username @talk.user.username
json.user_image @talk.user.image_url
json.id @talk.id
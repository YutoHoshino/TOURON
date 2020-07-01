json.array! @talks do |talk|
  json.text talk.text
  json.image talk.image.url
  json.updated_at talk.updated_at.strftime("%Y-%m-%d %H:%M")
  json.status_id talk.status_id
  json.user_username talk.user.username
  json.user_image talk.user.image_url
  json.user_id talk.user_id
  json.id talk.id
end
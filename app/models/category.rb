class Category < ActiveHash::Base
  self.data = [
    {id: 1, name: "新型ウイルス"}, {id: 2, name: "エンタメ"}, {id: 3, name: "スポーツ"},
    {id: 4, name: "政治"}, {id: 5, name: "教育"}, {id: 6, name: "アニメ"},
    {id: 7, name: "キャリア"}, {id: 8, name: "ゲーム"}, {id: 9, name: "恋愛"},
    {id: 10, name: "国際"}, {id: 11, name: "グルメ"}, {id: 12, name: "テクノロジー"}, 
  ]
end
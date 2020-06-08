class Category < ActiveHash::Base
  self.data = [
      {id: 1, name: "エンタメ"}, {id: 2, name: "スポーツ"}, {id: 3, name: "国内"},
      {id: 4, name: "国際"}, {id: 5, name: "政治"}, {id: 6, name: "経済"},
      {id: 7, name: "ゲーム"}, {id: 8, name: "テクノロジー"}, {id: 9, name: "動物"},
      {id: 10, name: "キャリア"}, {id: 11, name: "恋愛"}, {id: 12, name: "グルメ"}
  ]
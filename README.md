# チーム開発 DEV2

## 開発環境について
### Docker
* コンテナ起動方法
ルート直下で下記コマンドを実行
```
docker-compose run -w /app --rm frontend yarn install
```
```
docker compose up -d --build
```
* コンテナ削除方法
```
docker compose down
```
* データベースコンテナに入る方法
```
docker compose exec mysql bash
```
* データベースログイン
-pの後にデータベース名を指定
```
mysql -u root -p mood
```
* バックエンドコンテナに入る方法
```
docker compose exec backend bash
```

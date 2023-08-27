# Student Facilities Application

# ADMIN: REACTJS 18.2.0 - CLIENT: REACT NATIVE 0.72.3 - SERVER: NODEJS EXPRESS 4.18.2 - DATABASE: MONGODB

> Cách làm việc:

### Làm việc branch cũ
1. `git stash` lưu tạm dữ liệu A đã làm vào máy
2. `git checkout master` chuyển sang nhánh chính
3. `git pull origin master` pull dữ liệu mới nhất từ nhánh chính
4. `git checkout <tên nhánh>` về lại nhánh cũ
5. `git stash apply` lấy lại dữ liệu A vào branch làm việc
6. Tiếp tục làm việc trên branch
7. Commit và push code lên nhánh đã tạo `git push origin <tên nhánh>`
8. `git checkout master` + `git merge <tên nhánh>` 
9. Truy cập github tạo pull request
10. Nhớ chuyển về branch của mình (hiện tại đang ở main)

### Tạo branch mới
1. Pull mới nhất từ nhánh main `git pull origin master`
2. Tạo nhánh làm việc theo quy tắc feature-<tên nhánh> `git branch feature-<tên nhánh>`
3. Chuyển sang nhánh đã tạo `git checkout feature-<tên nhánh>`
4. Làm việc trên nhánh đã tạo
5. Commit và push code lên nhánh đã tạo `git push origin feature-<tên nhánh>`

> Admin:

1. Config `.env`
2. Use `npm i` + `npm run dev`

> Client:

1. Config `.env`
2. Use `npm i` + `npm start`

> Server:

1. Config MongoDB Compass
2. Edit connect string in `.env`
3. `npm i` + `npm start`


### UML DATABASE: [here](https://app.diagrams.net/#Hanvyidol%2FdbUML_ltttbdd%2Fmain%2FLTTTBDD)

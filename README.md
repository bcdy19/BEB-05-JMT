# BEB-05-Joyful Maplestory NFT

![mmm](https://user-images.githubusercontent.com/66237684/194202925-390c0dec-6b1b-47a2-b60e-f63e010ba571.PNG)

## 프로젝트 소개

메이플스토리 에셋을 활용한 수집형 NFT 웹3 게임입니다.메이플스토리는 2003년부터 2022년, 
지금도 파생 서비스를 런칭하고 있으며, 블록체인과 메타버스로의 확장까지 바라보고 있습니다.
저희도 NFT와 디파이를 활용하여 메이플스토리를 블록체인 웹3 게임으로의 개발을 도전해보았습니다.

## 기능 소개

- 회원가입/로그인
- 인벤토리
- 캐릭터&무기 민팅
- 캐릭터&무기 뽑기
- NFT 캐릭터&무기 마켓플레이스
- 무기 강화
- 유저 간 전투
- 랭킹
- 토큰 전송, 스왑, 스테이킹, deposit

## 기술 스택

![기술스택](https://user-images.githubusercontent.com/66237684/194203707-9668d71e-ae5e-4970-88ce-afdeed43670e.png)

## 환경 설정

### npm install 명령어로 모듈 설치 

`client`, `contract`, `server`, `script` 폴더 하위

```
npm install
```

### 환경 변수 설정

`client`, `contract`, `server` 폴더 하위에 `.env.example`을 참고하여 `.env`로 생성하고, 환경 변수들을 넣어준다.

### 도커로 MySQL 서버 실행

```
docker pull mysql:8
docker run --name mysql-container -e MYSQL_ROOT_PASSWORD=root -d -p 3306:3306 mysql:8
```

### DDL/쿼리를 위한 접근

```
docker exec -it mysql-container bash
mysql -u root -p
{패스워드 입력}

//jmt 데이터베이스를 생성하지 않았다면 생성!
create database jmt;
```

### MYSQL Sequelize 사용법

mysql에 `jmt` 데이터베이스 생성 후 진행한다.
```
npx sequelize db:migrate
//npx sequelize db:migrate:undo
```

### ERC721, 1155 메타데이터 DB에 업로드

```
cd ./script
node upload_character_attributes_db.js
node upload_item_attributes_db.js
```

### DB 재설정

```
# db
docker stop mysql-container
docker rm mysql-container
docker run --name mysql-container -e MYSQL_ROOT_PASSWORD=root -d -p 3306:3306 mysql:8
docker exec -it mysql-container bash
mysql -u root -p
{패스워드 입력}
create database jmt

# server 폴더에서
npx sequelize db:migrate

# script 폴더에서
node upload_character_attributes_db.js
node upload_item_attributes_db.js
```

### 컨트랙트 재설정

```
# contract (from truffle)
compile --all
migrate --reset

# 필요시 abi 파일 변경
# .env 파일의 컨트랙트 주소 변경
```

## Merge 이후 main 프로젝트 재설정 
1. Server, Client, Contract npm install 
2. Server DB User table data 삭제 
3. Truffle-config.js networkid, from, port 확인
4. contract/migrate .js 파일 ContractOwner local account[0]계정으로 변경 
5. Truffle local 컨트랙트 배포 
6. client/.env 컨트랙트 주소 수정  


## REST API

### 엔드포인트
- 개발: http://localhost:4000
- 라이브: TBD

### 회원가입 API

```
POST /user/signup
```

- Request
```
{
    "username": "유저 이름",
    "address": "지갑 주소"
}
```


- Response
```
201 SUCCESS
{
    "message": "회원가입이 완료되었습니다.",
    "data": {
        "username": "유저 이름",
        "address": "지갑 주소"
    }
}

409 FAIL
"이미 가입된 유저 이름입니다."
```

### 유저 이름 조회 API
```
GET /user/check/${userAddr}
```
- Response
```
200 SUCCESS
{
    message: "true",
            username: user.username,
            address: user.address
}

200 FAIL
{
    message: "false"
}
```

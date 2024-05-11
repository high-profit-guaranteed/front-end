# front-end

## 프로젝트 설정 방법
1. NodeJS 설치하기
2. Docker 설치하기 (Docker Desktop)
3. new branch 만들기
4. github desktop 으로 git clone 하기
5. branch 이동하기
6. VSCode 에서 열기
7. 콘솔 창 열기
8. ```$ cd ./front``` 명령어로 ./front/ 폴더로 이동하기
9. ```$ touch .env.local``` 명령어로 내용 없는 .env.local 파일 생성하기
10. ```$ npm install``` 명령어로 의존성 패키지 설치하기
11. ```$ docker-compose -f Docker-compose-dev.yml up -d --build``` 명령어로 도커 로컬 서버 실행하기
12. 이제 코드 파일을 수정하면 https://localhost/ 에 즉시 반영됨

## 기타 도커 명령어
1. 도커 컨테이너 종료 명령어: ```$ docker rm -f $(docker ps -qa)```
2. 도커 컨테이너 조회 명령어: ```$ docker ps```
3. 도커 이미지 조회 명령어: ```$ docker image ls```
4. 도커 명령어 정보:

>   ```$ docker -h```            - 도커 help
> 
>   ```$ docker image -h```      - 도커 이미지 help
> 
>   ```$ docker container -h```  - 도커 컨테이너 help

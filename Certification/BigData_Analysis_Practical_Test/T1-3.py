# 출력을 원할 경우 print() 함수 활용
# 예시) print(df.head())

# getcwd(), chdir() 등 작업 폴더 설정 불필요
# 파일 경로 상 내부 드라이브 경로(C: 등) 접근 불가

"""
문제 : 주어진 데이터에서 결측치가 80%이상 되는 컬럼은(변수는) 삭제하고, 80% 미만인 결측치가 있는 컬럼은 'city'별 중앙값으로 값을 대체하고 'f1'컬럼의 평균값을 출력하시오.
"""

# 데이터 파일 읽기 예제
import pandas as pd
df = pd.read_csv("./basic1.csv")
# 사용자 코딩
# print(df.isnull().sum() / df.shape[0] < 0.8)
df = df.drop(['f3'], axis=1)
df['city'].unique()
s=df[df['city']=='서울']['f1'].median()
k=df[df['city']=='경기']['f1'].median()
b=df[df['city']=='부산']['f1'].median()
d=df[df['city']=='대구']['f1'].median()

df['f1'] = df['f1'].fillna(df['city'].map({'서울':s,'경기':k,'부산':b,'대구':d}))         

print(df['f1'].mean())
# print(평균변수값)

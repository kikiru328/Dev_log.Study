# 출력을 원할 경우 print() 함수 활용
# 예시) print(df.head())

# getcwd(), chdir() 등 작업 폴더 설정 불필요
# 파일 경로 상 내부 드라이브 경로(C: 등) 접근 불가

"""
문제 : 데이터에서 IQR을 활용해 Fare 컬럼의 이상치를 찾고, 이상치 데이터의 여성 수를 구하시오.
"""
# 데이터 파일 읽기 예제
import pandas as pd
a = pd.read_csv("./titanic_train.csv")
# 사용자 코딩
q1 = a['Fare'].quantile(.25)
q3 = a['Fare'].quantile(.75)
IQR = q3-q1
low_out, high_out = (q1-(1.5*IQR), q3+(1.5*IQR))
low_outlier = a[a['Fare']<low_out]
high_outlier = a[a['Fare']>high_out]

print(len(high_outlier[high_outlier['Sex']=='female']))
# 답안 제출 예시
# print(평균변수값)

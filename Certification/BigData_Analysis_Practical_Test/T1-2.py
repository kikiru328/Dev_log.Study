# 출력을 원할 경우 print() 함수 활용
# 예시) print(df.head())

# getcwd(), chdir() 등 작업 폴더 설정 불필요
# 파일 경로 상 내부 드라이브 경로(C: 등) 접근 불가

"""
문제 : 주어진 데이터에서 이상치(소수점 나이)를 찾고 올림, 내림 버림(절사)했을 때 3가지 모두 이상치 'age' 평균을 구한 다음 모두 더하여 출력하시오.
"""

# 데이터 파일 읽기 예제
import pandas as pd
df = pd.read_csv("./basic1.csv")
# 사용자 코딩
import numpy as np
age = df[(df['age'] - np.floor(df['age'])) != 0]
ceil = np.ceil(age['age']).mean()
floor = np.floor(age['age']).mean()
trunc = np.trunc(age['age']).mean()
print(ceil + floor + trunc)
         


# print(평균변수값)

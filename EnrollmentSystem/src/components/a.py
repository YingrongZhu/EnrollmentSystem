import tabula
import numpy as np
df = tabula.read_pdf("C:/Users/zhuyi/Desktop/myweb/mern-exercise-tracker1218/mern-exercise-tracker/src/components/base_table_v2.pdf", pages='all')
# tabula.convert_into("base_table_v2.pdf", "output.csv", output_format="csv", pages='all')
# print(df)
# print(df.shape)

df=np.array(df)
# print(df)
x=[]
# x=np.array(x)
for i in range(0,10):
    x.append(df[i][0])

print(x)
np.savetxt("output_1.csv", x, delimiter=",", fmt="%s")
# df.to_csv('output.cvs')
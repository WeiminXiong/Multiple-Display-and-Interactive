import json
from time import time

file_path = 'data.json'
save_path = 'time_huji.json'

with open(file_path, 'r', encoding='utf-8') as f:
    data = json.load(f)

time_huji = []
time_dict = {}
for item in data:
    if item['年份'] not in time_dict:
        time_dict[item['年份']] = {}
        time_dict[item['年份']]['民籍'] = time_dict[item['年份']]["军籍"] = time_dict[item['年份']]["监籍"] = time_dict[item['年份']]["官籍"] = \
            time_dict[item['年份']]["匠籍"] = time_dict[item['年份']]["灶籍"] = time_dict[item['年份']]["站籍"] = 0
    time_dict[item['年份']][item['户籍']] += 1
for key, value in time_dict.items():
    li = []
    li.append(int(key))
    for k, v in value.items():
        li.append(v)
    time_huji.append(li)

def f(a, b):
    return a[0] - b[0]
time_huji.sort()
for item in time_huji:
    item[0] = str(item[0]) +"-01-01"
with open(save_path, 'w', encoding='utf-8') as f:
    f.write(json.dumps(time_huji))
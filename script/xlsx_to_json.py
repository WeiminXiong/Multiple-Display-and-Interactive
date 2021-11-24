import xlrd
import json

save_path = 'data.json'
file_path = 'save.xls'

work_book = xlrd.open_workbook(file_path)
work_sheet = work_book.sheet_by_index(0)
nrows = work_sheet.nrows
ncols = work_sheet.ncols
result = []

filter_index = [0, 3, 4, 9, 10, 11, 14]
name_index = ["ID", "年份", "姓名", "籍贯", "户籍", "科目", "年龄"]
for row in range(1, nrows):
    info = {}
    for name, col in zip(name_index, filter_index):
        info[name] = str(work_sheet.cell_value(row, col))
    result.append(info)

with open(save_path, 'w', encoding='utf-8') as f:
    json.dump(result, f, ensure_ascii=False)

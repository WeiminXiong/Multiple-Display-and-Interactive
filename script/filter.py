import xlrd
import xlwt

save_path = "save.xls"

data = xlrd.open_workbook("filtered.xlsx")
table = data.sheet_by_index(0)
nrows = table.nrows
ncols = table.ncols
workbook = xlwt.Workbook()
worksheet = workbook.add_sheet("sheet1")
cnt = 0

for row in range(nrows):
    if "籍" in table.cell_value(row, 10):
        for col in range(ncols):
            value = table.cell_value(row, col)
            if col == 10:
                value = str(value)
                if value[-2: -1] == "□":
                    continue
                if "民籍" in value or "富戶籍" in value or "儒籍" in value or "醫籍" in value or "生員籍" in value or "太醫院籍" in value:
                    value = "民籍"
                if "軍" in value or "旗" in value or "衛" in value or "弓兵" in value or "校" in value or "千戶所籍" in value or "牧所" in value:
                    value = "军籍"
                if "官籍" in value:
                    value = "官籍"
                if "廚籍" in value or "匠籍" in value or "馬船" in value or "馬站" in value:
                    value = "匠籍"
                if "鹽籍" in value or "竃籍" in value or "塩籍" in value or "竈籍" in value:
                    value = "灶籍"
                if "占籍" in value or "站籍" in value:
                    value = "站籍"
                if "監籍" in value:
                    value = "监籍"
            worksheet.write(cnt, col, value)
        cnt+=1
workbook.save(save_path) 


# App

## Roadmap

1.
   - [ ] 导出用户单集评分数据。
     - 就先放在时间线栏位 “我的单集评分” 里。
     - [ ] 每名用户每 24 小时允许生成一次。
       - 第一行：文本 “导出我的单集评分数据”、按钮
         `生成`（短期内生成过时：禁用的按钮 `生成（于 <时间> 后可再次生成）`）。
       - 第二行（若已生成且未过期）：链接 `单集评分-<用户 ID>-<时间>.csv.zip`。
2.
   - [ ] 周报。
     - 额外按日（04:00 ~ 次日 04:00？）记录评分变化。
     - 每周（周五？）生成一张由前七天数据及整体数据汇集而成的报告表格<wbr />
       （svg），并定时发布出去。

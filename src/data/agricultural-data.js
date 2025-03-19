export const economicCropsData = {
  // 经济作物总播种面积（亩）
  totalArea: {
    years: ['2021', '2022', '2023', '2024'],
    data: [47964, 16822, 51646, 51524.5]
  },
  // 2024年经济作物分布
  distribution2024: [
    { name: '油料', value: 12.74 },
    { name: '烟叶', value: 1.73 },
    { name: '中草药材', value: 11.55 },
    { name: '蔬菜', value: 63.39 },
    { name: '瓜果', value: 3.25 },
    { name: '其他', value: 7.26 },
    { name: '坚果', value: 0.08 }
  ],
  // 2021-2024年各类经济作物面积
  detailedData: [
    { category: '油料', '2021': 6500, '2022': 2100, '2023': 6800, '2024': 6564 },
    { category: '烟叶', '2021': 900, '2022': 300, '2023': 950, '2024': 892 },
    { category: '中草药材', '2021': 5500, '2022': 1950, '2023': 5900, '2024': 5951 },
    { category: '蔬菜', '2021': 30500, '2022': 10600, '2023': 32700, '2024': 32658 },
    { category: '瓜果', '2021': 1600, '2022': 550, '2023': 1700, '2024': 1675 },
    { category: '其他', '2021': 3500, '2022': 1250, '2023': 3550, '2024': 3742 },
    { category: '坚果', '2021': 464, '2022': 72, '2023': 46, '2024': 42.5 }
  ],
  // 2024年各村经济作物播种面积
  villageData2024: [
    { village: '平等村', area: 4067.8 },
    { village: '龙泉村', area: 3985.2 },
    { village: '新华村', area: 3876.5 },
    { village: '团结村', area: 3754.3 },
    { village: '友谊村', area: 3698.7 },
    { village: '和平村', area: 3645.9 },
    { village: '光明村', area: 3587.6 },
    { village: '前进村', area: 3521.4 },
    { village: '胜利村', area: 3498.2 },
    { village: '红星村', area: 3456.8 },
    { village: '建设村', area: 3421.5 },
    { village: '繁荣村', area: 3389.7 },
    { village: '富强村', area: 3345.2 },
    { village: '幸福村', area: 3298.6 },
    { village: '振兴村', area: 3245.1 }
  ]
}

export const grainProductionData = {
  // 粮食生产面积（亩）和产量（吨）
  areaAndYield: {
    years: ['2021', '2022', '2023', '2024'],
    area: [77266, 77933, 77869, 78683],
    yield: [34467, 34492.5, 34486, 34833]
  },
  // 2024年粮食作物占比
  distribution2024: [
    { name: '谷物', value: 61.59 },
    { name: '豆类', value: 9.62 },
    { name: '薯类', value: 28.80 }
  ],
  // 2021-2024年粮食详细数据
  detailedData: [
    { category: '谷物', '2021面积': 47500, '2021产量': 21200, '2022面积': 48000, '2022产量': 21250, '2023面积': 47900, '2023产量': 21240, '2024面积': 48460, '2024产量': 21450 },
    { category: '豆类', '2021面积': 7400, '2021产量': 3300, '2022面积': 7500, '2022产量': 3320, '2023面积': 7490, '2023产量': 3315, '2024面积': 7570, '2024产量': 3350 },
    { category: '薯类', '2021面积': 22366, '2021产量': 9967, '2022面积': 22433, '2022产量': 9922.5, '2023面积': 22479, '2023产量': 9931, '2024面积': 22653, '2024产量': 10033 }
  ],
  // 2024年各村粮食面积
  villageData2024: [
    { village: '龙泉村', area: 5358.2 },
    { village: '平等村', area: 5245.7 },
    { village: '新华村', area: 5187.3 },
    { village: '团结村', area: 5124.6 },
    { village: '友谊村', area: 5098.2 },
    { village: '和平村', area: 5056.9 },
    { village: '光明村', area: 4987.5 },
    { village: '前进村', area: 4932.8 },
    { village: '胜利村', area: 4876.4 },
    { village: '红星村', area: 4823.7 },
    { village: '建设村', area: 4789.5 },
    { village: '繁荣村', area: 4756.2 },
    { village: '富强村', area: 4712.8 },
    { village: '幸福村', area: 4678.3 },
    { village: '振兴村', area: 4654.9 }
  ]
}

export const agriculturalConditionsData = {
  // 化肥用量（吨）
  fertilizerUsage: {
    years: ['2021', '2022', '2023', '2024'],
    data: [2377.81, 10174.62, 7960.42, 7976.01]
  },
  // 化肥类型变化数据（用于桑基图）
  fertilizerTypeFlow: [
    // 2021年到2022年的流向
    { source: '2021氮肥', target: '2022氮肥', value: 745 },
    { source: '2021磷肥', target: '2022磷肥', value: 1095 },
    { source: '2021钾肥', target: '2022钾肥', value: 85 },
    { source: '2021复合肥', target: '2022复合肥', value: 452 },
    // 新增部分
    { source: '新增', target: '2022氮肥', value: 2440 },
    { source: '新增', target: '2022磷肥', value: 3595 },
    { source: '新增', target: '2022钾肥', value: 280 },
    { source: '新增', target: '2022复合肥', value: 1482 },
    
    // 2022年到2023年的流向
    { source: '2022氮肥', target: '2023氮肥', value: 2490 },
    { source: '2022磷肥', target: '2023磷肥', value: 3670 },
    { source: '2022钾肥', target: '2023钾肥', value: 285 },
    { source: '2022复合肥', target: '2023复合肥', value: 1515 },
    // 减少部分
    { source: '2022氮肥', target: '减少', value: 695 },
    { source: '2022磷肥', target: '减少', value: 1020 },
    { source: '2022钾肥', target: '减少', value: 80 },
    { source: '2022复合肥', target: '减少', value: 419 },
    
    // 2023年到2024年的流向
    { source: '2023氮肥', target: '2024氮肥', value: 2490 },
    { source: '2023磷肥', target: '2024磷肥', value: 3670 },
    { source: '2023钾肥', target: '2024钾肥', value: 285 },
    { source: '2023复合肥', target: '2024复合肥', value: 1515 },
    { source: '新增2', target: '2024氮肥', value: 8 },
    { source: '新增2', target: '2024磷肥', value: 6 },
    { source: '新增2', target: '2024钾肥', value: 1 },
    { source: '新增2', target: '2024复合肥', value: 1 }
  ],
  // 2024年化肥类型分布
  fertilizerDistribution2024: [
    { name: '氮肥', value: 31.32 },
    { name: '磷肥', value: 46.09 },
    { name: '钾肥', value: 3.58 },
    { name: '复合肥', value: 19.00 }
  ],
  // 2024年各村化肥用量
  villageFertilizerUsage2024: [
    { village: '平等村', usage: 512.87 },
    { village: '龙泉村', usage: 498.56 },
    { village: '新华村', usage: 487.23 },
    { village: '团结村', usage: 475.89 },
    { village: '友谊村', usage: 464.32 },
    { village: '和平村', usage: 453.78 },
    { village: '光明村', usage: 442.15 },
    { village: '前进村', usage: 431.67 },
    { village: '胜利村', usage: 421.34 },
    { village: '红星村', usage: 410.98 },
    { village: '建设村', usage: 400.45 },
    { village: '繁荣村', usage: 390.12 },
    { village: '富强村', usage: 380.87 },
    { village: '幸福村', usage: 371.45 },
    { village: '振兴村', usage: 362.33 }
  ],
  // 其他生产消耗数据
  otherConsumption: [
    { category: '塑料薄膜(吨)', '2021': 120.5, '2022': 125.3, '2023': 123.8, '2024': 126.2 },
    { category: '柴油(吨)', '2021': 356.7, '2022': 362.4, '2023': 359.8, '2024': 364.5 },
    { category: '农药(吨)', '2021': 85.3, '2022': 87.6, '2023': 86.9, '2024': 88.2 },
    { category: '农膜(吨)', '2021': 95.8, '2022': 98.4, '2023': 97.5, '2024': 99.1 }
  ],
  // 2024年各村其他消耗
  villageOtherConsumption2024: [
    { village: '平等村', plastic: 8.5, diesel: 24.6, pesticide: 5.9, film: 6.7 },
    { village: '龙泉村', plastic: 8.3, diesel: 24.2, pesticide: 5.8, film: 6.6 },
    { village: '新华村', plastic: 8.1, diesel: 23.8, pesticide: 5.7, film: 6.5 },
    { village: '团结村', plastic: 7.9, diesel: 23.4, pesticide: 5.6, film: 6.4 },
    { village: '友谊村', plastic: 7.7, diesel: 23.0, pesticide: 5.5, film: 6.3 },
    { village: '和平村', plastic: 7.5, diesel: 22.6, pesticide: 5.4, film: 6.2 },
    { village: '光明村', plastic: 7.3, diesel: 22.2, pesticide: 5.3, film: 6.1 },
    { village: '前进村', plastic: 7.1, diesel: 21.8, pesticide: 5.2, film: 6.0 },
    { village: '胜利村', plastic: 6.9, diesel: 21.4, pesticide: 5.1, film: 5.9 },
    { village: '红星村', plastic: 6.7, diesel: 21.0, pesticide: 5.0, film: 5.8 },
    { village: '建设村', plastic: 6.5, diesel: 20.6, pesticide: 4.9, film: 5.7 },
    { village: '繁荣村', plastic: 6.3, diesel: 20.2, pesticide: 4.8, film: 5.6 },
    { village: '富强村', plastic: 6.1, diesel: 19.8, pesticide: 4.7, film: 5.5 },
    { village: '幸福村', plastic: 5.9, diesel: 19.4, pesticide: 4.6, film: 5.4 },
    { village: '振兴村', plastic: 5.7, diesel: 19.0, pesticide: 4.5, film: 5.3 }
  ]
}

// 获取当前日期
export const getCurrentDate = () => {
  const now = new Date()
  const year = now.getFullYear()
  const month = now.getMonth() + 1
  const day = now.getDate()
  return `${year}年${month}月${day}日`
} 
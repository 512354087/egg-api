'use strict';
const ReturnData = {
  aiFunctionList() {
    return [{
      id: 1,
      title: '物品识别设置',
      parentId: 0,
    }, {
      id: 2,
      title: '人体识别/动作捕捉设置',
      parentId: 0,
    }, {
      id: 3,
      title: '禁入区域设置',
      parentId: 0,
    }, {
      id: 4,
      title: '未佩戴安全帽',
      parentId: 1,
    },
    {
      id: 5,
      title: '未穿戴工作服',
      parentId: 1,
    }];
  },
  // 月统计报告
  reportMonthStatistics() {
    return {
      monthlyTotalAbnormality: 104, // 月总异常
      abnormalPeakDay: '2019-07-04', // 异常高峰
      abnormalPeak: 21,
      prevMonthlyTotalAbnormality: 100, // 上一个月异常总数
      statistics: [{
        id: 1,
        type: '安全护栏站立',
        statistics: 12,
      }, {
        id: 2,
        type: '翻越安全护栏',
        statistics: 12,
      }, {
        id: 3,
        type: '未佩戴安全帽',
        statistics: 12,
      }, {
        id: 4,
        type: '未识别人员',
        statistics: 12,
      }, {
        id: 5,
        type: '进入禁止区域',
        statistics: 12,
      }],
    };
  },
  // 月异常设备排行
  reportMonthlyDevAbnormality() {
    return [{
      sourceId: 'video6',
      devname: '员工通道',
      statistics: 12,
    }, {
      sourceId: 'video6',
      type: '消防通道',
      statistics: 12,
    }, {
      sourceId: 'video6',
      type: '施工井1',
      statistics: 12,
    }, {
      sourceId: 'video6',
      type: '南门',
      statistics: 12,
    }, {
      sourceId: 'video6',
      type: '北门',
      statistics: 12,
    }];
  },
  // 异常总数 月走势
  reportMonthlyTotalAbnormality() {
    return [
      {
        time: '2019-01',
        statistics: [{
          type: '安全护栏站立',
          statistics: 12,
        }, {
          type: '翻越安全护栏',
          statistics: 12,
        }, {
          type: '未佩戴安全帽',
          statistics: 12,
        }, {
          type: '未识别人员',
          statistics: 12,
        }, {
          type: '进入禁止区域',
          statistics: 12,
        }],
      }, {
        time: '2019-01',
        statistics: [{
          type: '安全护栏站立',
          statistics: 12,
        }, {
          type: '翻越安全护栏',
          statistics: 12,
        }, {
          type: '未佩戴安全帽',
          statistics: 12,
        }, {
          type: '未识别人员',
          statistics: 12,
        }, {
          type: '进入禁止区域',
          statistics: 12,
        }],
      }, {
        time: '2019-01',
        statistics: [{
          type: '安全护栏站立',
          statistics: 12,
        }, {
          type: '翻越安全护栏',
          statistics: 12,
        }, {
          type: '未佩戴安全帽',
          statistics: 12,
        }, {
          type: '未识别人员',
          statistics: 12,
        }, {
          type: '进入禁止区域',
          statistics: 12,
        }],
      }, {
        time: '2019-01',
        statistics: [{
          type: '安全护栏站立',
          statistics: 12,
        }, {
          type: '翻越安全护栏',
          statistics: 12,
        }, {
          type: '未佩戴安全帽',
          statistics: 12,
        }, {
          type: '未识别人员',
          statistics: 12,
        }, {
          type: '进入禁止区域',
          statistics: 12,
        }],
      }, {
        time: '2019-01',
        statistics: [{
          type: '安全护栏站立',
          statistics: 12,
        }, {
          type: '翻越安全护栏',
          statistics: 12,
        }, {
          type: '未佩戴安全帽',
          statistics: 12,
        }, {
          type: '未识别人员',
          statistics: 12,
        }, {
          type: '进入禁止区域',
          statistics: 12,
        }],
      }, {
        time: '2019-01',
        statistics: [{
          type: '安全护栏站立',
          statistics: 12,
        }, {
          type: '翻越安全护栏',
          statistics: 12,
        }, {
          type: '未佩戴安全帽',
          statistics: 12,
        }, {
          type: '未识别人员',
          statistics: 12,
        }, {
          type: '进入禁止区域',
          statistics: 12,
        }],
      }, {
        time: '2019-01',
        statistics: [{
          type: '安全护栏站立',
          statistics: 12,
        }, {
          type: '翻越安全护栏',
          statistics: 12,
        }, {
          type: '未佩戴安全帽',
          statistics: 12,
        }, {
          type: '未识别人员',
          statistics: 12,
        }, {
          type: '进入禁止区域',
          statistics: 12,
        }],
      }, {
        time: '2019-01',
        statistics: [{
          type: '安全护栏站立',
          statistics: 12,
        }, {
          type: '翻越安全护栏',
          statistics: 12,
        }, {
          type: '未佩戴安全帽',
          statistics: 12,
        }, {
          type: '未识别人员',
          statistics: 12,
        }, {
          type: '进入禁止区域',
          statistics: 12,
        }],
      }];
  },
  // 异常事件
  abnormalList() {
    return [{
      id: 1,
      accessAddress: 'http://192.168.100.241/video6/2019_06_28/d743ebcd-3cf0-4ffa-ad94-119d60056cf4/d743ebcd-3cf0-4ffa-ad94-119d60056cf4.mp4',
      sourceId: 'video6',
      endTime: '2019-06-28 15:12:18',
      stratTime: '2019-06-28 15:07:19',
      duration: '02:22',
      peopleNum: 2,
      videoName: 'TV08(站房东南)',
      warnType: 1,
      warntitle: '安全护栏站立',
    }, {
      id: 2,
      accessAddress: 'http://192.168.100.241/video6/2019_06_28/d743ebcd-3cf0-4ffa-ad94-119d60056cf4/d743ebcd-3cf0-4ffa-ad94-119d60056cf4.mp4',
      sourceId: 'video6',
      endTime: '2019-06-28 15:12:18',
      stratTime: '2019-06-28 15:07:19',
      duration: '02:22',
      peopleNum: 2,
      videoName: 'TV08(站房东南)',
      warnType: 2,
      warntitle: '翻越安全护栏',
    }, {
      id: 3,
      accessAddress: 'http://192.168.100.241/video6/2019_06_28/d743ebcd-3cf0-4ffa-ad94-119d60056cf4/d743ebcd-3cf0-4ffa-ad94-119d60056cf4.mp4',
      sourceId: 'video6',
      endTime: '2019-06-28 15:12:18',
      stratTime: '2019-06-28 15:07:19',
      duration: '02:22',
      peopleNum: 2,
      videoName: 'TV08(站房东南)',
      warnType: 2,
      warntitle: '翻越安全护栏',
    },
    {
      id: 4,
      accessAddress: 'http://192.168.100.241/video6/2019_06_28/d743ebcd-3cf0-4ffa-ad94-119d60056cf4/d743ebcd-3cf0-4ffa-ad94-119d60056cf4.mp4',
      sourceId: 'video7',
      endTime: '2019-06-28 15:12:18',
      stratTime: '2019-06-28 15:07:19',
      duration: '02:22',
      peopleNum: 2,
      videoName: 'TV08(站房东南)',
      warnType: 2,
      warntitle: '翻越安全护栏',
    }];
  },

  // 获得最新的异常视频地址
  abnormalVideoList() {
    return [
      {
        abnormalId: 1,
        accessAddress: 'http://192.168.100.241/video6/2019_06_28/d743ebcd-3cf0-4ffa-ad94-119d60056cf4/d743ebcd-3cf0-4ffa-ad94-119d60056cf4.mp4',
      },
      {
        abnormalId: 2,
        accessAddress: 'http://192.168.100.241/video6/2019_06_28/d743ebcd-3cf0-4ffa-ad94-119d60056cf4/d743ebcd-3cf0-4ffa-ad94-119d60056cf4.mp4',
      },
      {
        abnormalId: 3,
        accessAddress: 'http://192.168.100.241/video6/2019_06_28/d743ebcd-3cf0-4ffa-ad94-119d60056cf4/d743ebcd-3cf0-4ffa-ad94-119d60056cf4.mp4',
      },
    ];
  },

  // 异常统计
  abnormalStatistics() {
    return [{
      id: 1,
      type: '安全护栏站立',
      statistics: 12,
    }, {
      id: 2,
      type: '翻越安全护栏',
      statistics: 12,
    }, {
      id: 3,
      type: '未佩戴安全帽',
      statistics: 12,
    }, {
      id: 4,
      type: '未识别人员',
      statistics: 12,
    }, {
      id: 5,
      type: '进入禁止区域',
      statistics: 12,
    }];
  },


  // 本月异常统计
  abnormalMonthStatistics() {
    return [{
      time: '07-01',
      value: [{
        id: 1,
        type: '安全护栏站立',
        statistics: 12,
      }, {
        id: 2,
        type: '翻越安全护栏',
        statistics: 12,
      }, {
        id: 3,
        type: '未佩戴安全帽',
        statistics: 12,
      }, {
        id: 4,
        type: '未识别人员',
        statistics: 12,
      }, {
        id: 5,
        type: '进入禁止区域',
        statistics: 12,
      }],
    }, {
      day: '07-02',
      value: [{
        id: 1,
        type: '安全护栏站立',
        statistics: 12,
      }, {
        id: 2,
        type: '翻越安全护栏',
        statistics: 12,
      }, {
        id: 3,
        type: '未佩戴安全帽',
        statistics: 12,
      }, {
        id: 4,
        type: '未识别人员',
        statistics: 12,
      }, {
        id: 5,
        type: '进入禁止区域',
        statistics: 12,
      }],
    }, {
      day: '07-03',
      value: [{
        id: 1,
        type: '安全护栏站立',
        statistics: 12,
      }, {
        id: 2,
        type: '翻越安全护栏',
        statistics: 12,
      }, {
        id: 3,
        type: '未佩戴安全帽',
        statistics: 12,
      }, {
        id: 4,
        type: '未识别人员',
        statistics: 12,
      }, {
        id: 5,
        type: '进入禁止区域',
        statistics: 12,
      }],
    }, {
      day: '07-04',
      value: [{
        id: 1,
        type: '安全护栏站立',
        statistics: 12,
      }, {
        id: 2,
        type: '翻越安全护栏',
        statistics: 12,
      }, {
        id: 3,
        type: '未佩戴安全帽',
        statistics: 12,
      }, {
        id: 4,
        type: '未识别人员',
        statistics: 12,
      }, {
        id: 5,
        type: '进入禁止区域',
        statistics: 12,
      }],
    }];
  },
  getVideoList() {
    return [
      {
        id: 1,
        sourceId: 'video9',
        rtsp: 'rtsp://192.168.100.241/videotest/1',
        rtmp: 'rtmp://192.168.100.108/live/rtsp1.stream',
        videoName: 'video9',
        area: '南墙中',
        label: '车牌识别',
        type: 3,
        alarmContent: '21',
        ip: '192.168.2.9',
        channel: '120',
        serialNumber: 'DS-2DC6220IW-A20180429CCCHC18892152A',
        desc: 'TV04(南墙中)',
        remake: 'TV04(南墙中)',
        devId: 21,
        functions: '',
        enable: '0', imgUrl: '',
        checkouttDetectionOfType: [
          '车牌',
        ],
        list: [
          '车牌识别',
          '行为识别',
          '电子围栏',
          '着装规范',
        ],
        checkType: [
          '车牌识别',
        ],
        loading: false,
        shadow: [
          {
            x: '210',
            y: '200',
          },
          {
            x: '360',
            y: '255',
          },
          {
            x: '227',
            y: '505',
          },
          {
            x: '40',
            y: '470',
          },
        ],
        showDzwl: false,
        fps: 3,
        fpsNum: 11,
        predictContent: null,
        cost_time: null,
        aiContentProb: null,
      },
      {
        id: 2,
        sourceId: 'video8',
        rtsp: 'rtsp://192.168.100.241/videotest/6',
        rtmp: 'rtmp://192.168.100.108/live/rtsp2.stream',
        videoName: 'video8',
        area: '入口南',
        label: '车牌识别',
        type: 3,
        alarmContent: '6',
        ip: '192.168.2.8',
        channel: '119',
        serialNumber: 'DS-2DC6220IW-A20180429CCCHC18892152B',
        desc: 'TV03(入口南)',
        remake: 'TV03(入口南)',
        devId: 6,
        functions: '',
        enable: '0', imgUrl: '',
        checkouttDetectionOfType: [
          '车牌',
        ],
        list: [
          '车牌识别',
          '行为识别',
          '电子围栏',
          '着装规范',
        ],
        checkType: [
          '车牌识别',
        ],
        loading: false,
        shadow: [
          {
            x: '210',
            y: '200',
          },
          {
            x: '360',
            y: '255',
          },
          {
            x: '227',
            y: '505',
          },
          {
            x: '40',
            y: '470',
          },
        ],
        showDzwl: false,
        fps: 3,
        fpsNum: 11,
        predictContent: null,
        cost_time: null,
        aiContentProb: null,
      },
      {
        id: 3,
        sourceId: 'video10',
        rtsp: 'rtsp://192.168.100.241/videotest/1',
        rtmp: 'rtmp://192.168.100.108/live/rtsp3.stream',
        videoName: 'video10',
        area: '围墙西北角',
        label: '车牌识别',
        type: 3,
        alarmTypes: '',
        alarmContent: '7',
        ip: '192.168.2.10',
        channel: '121',
        serialNumber: 'DS-2DC6220IW-A20180429CCCHC18892152C',
        desc: 'TV02(围墙西北角)',
        remake: 'TV02(围墙西北角)',
        devId: 7,
        functions: '',
        enable: '0', imgUrl: '',
        checkouttDetectionOfType: [
          '车牌',
        ],
        list: [
          '车牌识别',
          '行为识别',
          '电子围栏',
          '着装规范',
        ],
        checkType: [
          '车牌识别',
        ],
        loading: false,
        shadow: [
          {
            x: '210',
            y: '200',
          },
          {
            x: '360',
            y: '255',
          },
          {
            x: '227',
            y: '505',
          },
          {
            x: '40',
            y: '470',
          },
        ],
        showDzwl: false,
        fps: 3,
        fpsNum: 11,
        predictContent: null,
        cost_time: null,
        aiContentProb: null,
      },
      {
        id: 4,
        sourceId: 'video4',
        rtsp: 'rtsp://192.168.100.241/videotest/9',
        rtmp: 'rtmp://192.168.100.108/live/rtsp4.stream',
        videoName: 'video4',
        area: '加氢机罩棚东北',
        label: '行为识别',
        type: 2,
        alarmTypes: '加氢操作',
        alarmContent: '加氢位检测到存在不规范的加氢操作行为',
        ip: '192.168.2.4',
        channel: '111',
        serialNumber: 'DS-2DC6220IW-A20180429CCCHC18892152D',
        desc: 'TV11(加氢机罩棚东北)',
        remake: 'TV11(加氢机罩棚东北)',
        devId: 6,
        functions: '',
        enable: '0', imgUrl: '',
        checkouttDetectionOfType: [
          '骨骼图',
        ],
        list: [
          '行为识别',
          '车牌识别',
          '电子围栏',
          '着装规范',
        ],
        checkType: [
          '行为识别',
        ],
        loading: false,
        shadow: [
          {
            x: '210',
            y: '200',
          },
          {
            x: '360',
            y: '255',
          },
          {
            x: '227',
            y: '505',
          },
          {
            x: '40',
            y: '470',
          },
        ],
        showDzwl: false,
        fps: 3,
        fpsNum: 11,
        pose: null,
        object: null,
        time_stamp: null,
      },
      {
        id: 5,
        sourceId: 'video1',
        rtsp: 'rtsp://192.168.100.241/videotest/9',
        rtmp: 'rtmp://192.168.100.108/live/rtsp5.stream',
        videoName: 'video1',
        area: '加氢机罩棚西北',
        label: '行为识别',
        type: 2,
        alarmTypes: '加氢操作',
        alarmContent: '加氢位检测到存在不规范的加氢操作行为',
        ip: '192.168.2.2',
        channel: '64',
        serialNumber: 'DS-2DC6220IW-A20180429CCCHC18892152E',
        desc: 'TV07(加氢机罩棚西北)',
        remake: 'TV07(加氢机罩棚西北)',
        devId: 21,
        functions: '',
        enable: '0', imgUrl: '',
        checkouttDetectionOfType: [
          '骨骼图',
        ],
        list: [
          '行为识别',
          '车牌识别',
          '电子围栏',
          '着装规范',
        ],
        checkType: [
          '行为识别',
        ],
        loading: false,
        shadow: [
          {
            x: '210',
            y: '200',
          },
          {
            x: '360',
            y: '255',
          },
          {
            x: '227',
            y: '505',
          },
          {
            x: '40',
            y: '470',
          },
        ],
        showDzwl: false,
        fps: 3,
        fpsNum: 11,
        pose: null,
        object: null,
        time_stamp: null,
      },
      {
        id: 6,
        sourceId: 'video14',
        rtsp: 'rtsp://192.168.100.241/videotest/9',
        rtmp: 'rtmp://192.168.100.108/live/rtsp6.stream',
        videoName: 'video14',
        area: '加氢机罩棚西南',
        label: '行为识别',
        type: 2,
        alarmTypes: '加氢操作',
        alarmContent: '加氢位检测到存在不规范的加氢操作行为',
        ip: '192.168.2.14',
        channel: '2',
        serialNumber: 'DS-2DC6220IW-A20180429CCCHC18892152F',
        desc: 'TV10(加氢机罩棚西南)',
        remake: 'TV10(加氢机罩棚西南)',
        devId: 7,
        functions: '',
        enable: '0', imgUrl: '',
        checkouttDetectionOfType: [
          '骨骼图',
        ],
        list: [
          '行为识别',
          '车牌识别',
          '电子围栏',
          '着装规范',
        ],
        checkType: [
          '行为识别',
        ],
        loading: false,
        shadow: [
          {
            x: '210',
            y: '200',
          },
          {
            x: '360',
            y: '255',
          },
          {
            x: '227',
            y: '505',
          },
          {
            x: '40',
            y: '470',
          },
        ],
        showDzwl: false,
        fps: 3,
        fpsNum: 11,
        pose: null,
        object: null,
        time_stamp: null,
      },
      {
        id: 7,
        sourceId: 'video15',
        rtsp: 'rtsp://192.168.100.241/videotest/9',
        rtmp: 'rtmp://192.168.100.108/live/rtsp7.stream',
        videoName: 'video15',
        area: '围墙东北',
        label: '电子围栏',
        type: 1,
        alarmTypes: '区域禁入',
        alarmContent: '禁止区域检测到人员违规闯入，请及时处置',
        ip: '192.168.2.15',
        channel: '3',
        serialNumber: 'DS-2DC6220IW-A20180429CCCHC18892152G',
        desc: 'TV12(围墙东北)',
        remake: 'TV12(围墙东北)',
        functions: '',
        enable: '0', imgUrl: '',
        checkouttDetectionOfType: [
          '人',
        ],
        list: [
          '电子围栏',
          '着装规范',
        ],
        checkType: [
          '电子围栏',
        ],
        loading: false,
        shadow: [
          {
            x: '210',
            y: '200',
          },
          {
            x: '360',
            y: '255',
          },
          {
            x: '227',
            y: '505',
          },
          {
            x: '40',
            y: '470',
          },
        ],
        showDzwl: false,
        fps: 3,
        fpsNum: 11,
        number: null,
        time_stamp: null,
      },
      {
        id: 8,
        sourceId: 'video6',
        rtsp: 'rtsp://admin:visenergy2018@192.168.100.205:554/h264/ch1/main/av_stream',
        rtmp: 'rtmp://192.168.100.108/live/rtsp8.stream',
        videoName: 'video6',
        area: '站房东南',
        label: '着装规范',
        type: 4,
        alarmTypes: '着装规范',
        alarmContent: '违反安全生产操作要求，未佩戴安全帽',
        ip: '192.168.2.6',
        channel: '116',
        serialNumber: 'DS-2DC6220IW-A20180429CCCHC18892152H',
        desc: 'TV08(站房东南)',
        remake: 'TV08(站房东南)',
        functions: '{"GGT":"骨骼图"}',
        enable: '1',
        checkouttDetectionOfType: [
          '安全帽',
          '骨骼图',
        ],
        list: [
          '电子围栏',
          '着装规范',
        ],
        checkType: [
          '着装规范',
        ],
        loading: false,
        shadow: [
          {
            x: '210',
            y: '200',
          },
          {
            x: '360',
            y: '255',
          },
          {
            x: '227',
            y: '505',
          },
          {
            x: '40',
            y: '470',
          },
        ],
        showDzwl: false,
        fps: 3,
        fpsNum: 11,
        number: null,
        time_stamp: null,
        HelmetNumber: null,
      },
      {
        id: 9,
        sourceId: 'video7',
        rtsp: 'rtsp://admin:visenergy2018@192.168.100.205:554/h264/ch1/main/av_stream',
        rtmp: 'rtmp://192.168.100.108/live/rtsp9.stream',
        videoName: 'video7',
        area: '站房东北',
        label: '电子围栏',
        type: 1,
        alarmTypes: '区域禁入',
        alarmContent: '禁止区域检测到人员违规闯入，请及时处置',
        ip: '192.168.2.7',
        channel: '117',
        serialNumber: 'DS-2DC6220IW-A20180429CCCHC18892152I',
        desc: 'TV09(站房东北)',
        remake: 'TV09(站房东北)',
        functions: '{"GGT":"骨骼图"}',
        enable: '0', imgUrl: '',
        checkouttDetectionOfType: [
          '人',
          '骨骼图',
        ],
        list: [
          '电子围栏',
          '着装规范',
        ],
        checkType: [
          '电子围栏',
        ],
        loading: false,
        shadow: [
          {
            x: '210',
            y: '200',
          },
          {
            x: '360',
            y: '255',
          },
          {
            x: '227',
            y: '505',
          },
          {
            x: '40',
            y: '470',
          },
        ],
        showDzwl: false,
        fps: 3,
        fpsNum: 10,
        number: null,
        time_stamp: null,
      },
      {
        id: 10,
        sourceId: 'video3',
        rtsp: 'rtsp://192.168.100.241/videotest/18',
        rtmp: 'rtmp://192.168.100.108/live/rtsp10.stream',
        videoName: 'video3',
        area: '储氢设备防护罩西',
        label: '着装规范',
        type: 4,
        alarmTypes: '着装规范',
        alarmContent: '违反安全生产操作要求，未佩戴安全帽',
        ip: '192.168.2.3',
        channel: '110',
        serialNumber: 'DS-2DC6220IW-A20180429CCCHC18892152J',
        desc: 'TV06(储氢设备防护罩西)',
        remake: 'TV06(储氢设备防护罩西)',
        functions: '{"GGT":"骨骼图"}',
        enable: '0', imgUrl: '',
        checkouttDetectionOfType: [
          '安全帽',
          '骨骼图',
        ],
        list: [
          '着装规范',
          '电子围栏',
        ],
        checkType: [
          '着装规范',
        ],
        loading: false,
        shadow: [
          {
            x: '210',
            y: '200',
          },
          {
            x: '360',
            y: '255',
          },
          {
            x: '227',
            y: '505',
          },
          {
            x: '40',
            y: '470',
          },
        ],
        showDzwl: false,
        fps: 3,
        fpsNum: 11,
        number: null,
        time_stamp: '2019-06-28 15:06:55',
        HelmetNumber: null,
      },
    ];
  },
};


module.exports = ReturnData;

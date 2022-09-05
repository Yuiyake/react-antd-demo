import React, { useEffect, useState } from 'react';
import { debounce } from 'lodash';
import * as echarts from 'echarts';

export type EChartsOption = echarts.EChartsOption;

// 这里的ref是接受调用的时候传递的参数，然后initOption就是echarts的初始化方法，cb回调函数
const useEcharts = (
  ref: React.RefObject<HTMLDivElement | HTMLCanvasElement | undefined>,
  initOption: EChartsOption,
  cb?: (ec: echarts.ECharts) => any,
  theme = '',
): {
  echart: echarts.ECharts | undefined;
  cb: (ec: echarts.ECharts) => void;
} => {
  const [chart, setChart] = useState<echarts.ECharts>();

  const callback = (ec: echarts.ECharts) => {
    if (typeof cb === 'function') {
      cb(ec);
    }
  };

  // hooks，用来更改echarts数据值,接收一个数组，第二个参数作为依赖，依赖和数组进行一次浅比较，如果值不一样就执行副作用（修改）
  // 如果第二个参数是空数组，那么这个副作用逻辑只执行一次
  // 这里的依赖是[ref]，就是接收useEffect这个组件被调用的时候传过来的值，ref相当于组件传参的props
  // useEffect同样被用作清除函数副作用的，比如销毁一些计时器，就是return一个闭包里面放一些销毁操作（比如clearInterval）
  // useEffect有几个坑注意一下，首先是第二个参数一定要传，然后是useEffect监测不到堆中值得变化，所有引用类型数据都应该注意这一点。
  useEffect(() => {
    if (ref.current) {
      const c = echarts.init(ref.current, theme);
      setChart(c);
      c.setOption(initOption);
      callback(c);
    }

    const resizeHandler = debounce(() => {
      chart?.resize();
    }, 100);

    window.addEventListener('resize', resizeHandler);

    return () => {
      chart?.dispose();
      window.removeEventListener('resize', resizeHandler);
    };
  }, [ref]);

  return {
    echart: chart,
    cb: callback,
  };
};

export default useEcharts;

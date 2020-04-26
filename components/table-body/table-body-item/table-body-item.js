// components/table-body/table-body-item/table-body-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    cityInfo:{
      type:Object,
      value:{}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    selected:true,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleNameClick(){
      // console.log('-------------')
      this.setData({
        selected: !this.data.selected,
      })
    }
  }
})

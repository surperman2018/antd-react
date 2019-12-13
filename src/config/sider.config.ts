interface SiderItem {
  id: string;
  title: string;
  path: string;
}

interface SiderConfigInterface {
  id: string;
  root: string;
  icon: string;
  children: SiderItem[];
}

const SiderConfig:SiderConfigInterface[] = [
  {
    id: "analysis",
    root: "统计",
    icon: "pie-chart",
    children: [
      {
        id: "analysis-user",
        title: "用户分析",
        path: "/analysis/user"
      },
      {
        id: "analysis-order",
        title: "订单分析",
        path: "/analysis/order"
      }
    ]
  },
  {
    id: "goods",
    root: "商品",
    icon: "shop",
    children: [
      {
        id: "goods-manager",
        title: "商品管理",
        path: "/goods/manager"
      }
    ]
  },
  {
    id: "category",
    root: "分类",
    icon: "apartment",
    children: [
      {
        id: "category-manager",
        title: "分类管理",
        path: "/category/manager"
      }
    ]
  },
  {
    id: "order",
    root: "订单",
    icon: "unordered-list",
    children: [
      {
        id: "order-manager",
        title: "订单管理",
        path: "/order/manager"
      }
    ]
  },
  {
    id: "setting",
    root: "设置",
    icon: "setting",
    children: [
      {
        id: "setting-permission",
        title: "权限管理",
        path: "/setting/permission/manager"
      },
      {
        id: "setting-account",
        title: "账户管理",
        path: "/setting/account/manager"
      }
    ]
  }
];

export default SiderConfig;

import React, { useState } from 'react';
import { 
  ChevronLeft, MoreHorizontal, Circle, Wallet, Banknote, 
  RefreshCcw, Users, QrCode, ChevronRight, Lock, 
  Map, MapPin, Clock, FileText, Compass, User, PackageCheck,
  Signal, Wifi, Battery, Plus, CheckCircle2
} from 'lucide-react';

// --- Shared Components ---
const TopBar = ({ title, isBlue }: { title: string, isBlue: boolean }) => (
  <div className={`flex items-center justify-between px-4 pb-3 pt-12 ${isBlue ? 'text-white' : 'text-gray-900'}`}>
    <ChevronLeft className="w-6 h-6" />
    <h1 className="text-lg font-medium">{title}</h1>
    <div className={`flex items-center space-x-2 px-3 py-1.5 rounded-full ${isBlue ? 'bg-blue-700/50' : 'bg-gray-100'}`}>
      <MoreHorizontal className="w-4 h-4" />
      <div className="w-[1px] h-3 bg-current opacity-30"></div>
      <Circle className="w-4 h-4" />
    </div>
  </div>
);

// --- Screen 1: MyDistribution ---
const MyDistribution = () => (
  <div className="bg-gray-50 min-h-full pb-10">
    <div className="bg-blue-600 pb-20">
      <TopBar title="我的分销" isBlue={true} />
    </div>

    <div className="px-4 -mt-16 space-y-4">
      {/* Card 1 */}
      <div className="bg-white rounded-2xl p-4 shadow-sm">
        <h2 className="font-medium text-gray-900 mb-4">收益明细</h2>
        <div className="flex justify-between text-center mb-6">
          <div className="flex-1 border-r border-gray-100">
            <div className="text-2xl font-semibold text-blue-600">256.88</div>
            <div className="text-xs text-gray-400 mt-1">今日收益（元）</div>
          </div>
          <div className="flex-1">
            <div className="text-2xl font-semibold text-gray-900">256.88</div>
            <div className="text-xs text-gray-400 mt-1">本周收益（元）</div>
          </div>
        </div>
        
        <div className="space-y-3 text-sm border-t border-gray-50 pt-4">
          <div className="flex justify-between">
            <span className="text-gray-500">累计收益：</span>
            <span className="font-medium text-gray-900">¥ 256.88</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">新增会员：</span>
            <span className="font-medium text-gray-900">5人</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">会员总数：</span>
            <span className="font-medium text-gray-900">12人</span>
          </div>
        </div>

        <div className="flex justify-between text-sm border-t border-gray-50 mt-4 pt-4">
          <span className="text-gray-500">账户余额：</span>
          <span className="font-medium text-blue-600">¥ 256.88</span>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-2xl p-4 shadow-sm">
        <h2 className="font-medium text-gray-900 mb-2">佣金服务</h2>
        <div className="space-y-1">
          <MenuItem icon={<Wallet className="w-5 h-5 text-gray-600" />} title="佣金明细" />
          <MenuItem icon={<Banknote className="w-5 h-5 text-gray-600" />} title="我要提现" />
          <MenuItem icon={<RefreshCcw className="w-5 h-5 text-gray-600" />} title="返佣订单" />
          <MenuItem icon={<Users className="w-5 h-5 text-gray-600" />} title="我的团队" />
          <MenuItem icon={<QrCode className="w-5 h-5 text-gray-600" />} title="我的二维码" />
        </div>
      </div>
    </div>
  </div>
);

const MenuItem = ({ icon, title }: { icon: React.ReactNode, title: string }) => (
  <div className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0">
    <div className="flex items-center space-x-3">
      {icon}
      <span className="text-gray-800 text-sm">{title}</span>
    </div>
    <ChevronRight className="w-4 h-4 text-gray-400" />
  </div>
);

// --- Screen 2: GroupLeaderCenter ---
const GroupLeaderCenter = () => (
  <div className="bg-gray-50 min-h-full pb-10">
    <div className="bg-blue-600 pb-20">
      <TopBar title="团长中心" isBlue={true} />
    </div>

    <div className="px-4 -mt-16 space-y-4">
      {/* Card 1 */}
      <div className="bg-white rounded-2xl p-4 shadow-sm">
        <h2 className="font-medium text-gray-900 mb-4">团长功能</h2>
        <div className="flex space-x-3">
          <div className="flex-1 bg-gray-50 rounded-xl p-3 flex items-center space-x-3">
            <div className="bg-blue-100/50 p-2 rounded-full">
              <PackageCheck className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <div className="text-sm font-medium text-gray-900">发起拼团</div>
              <div className="text-xs text-gray-400 flex items-center mt-0.5">立即发起 <ChevronRight className="w-3 h-3 ml-0.5" /></div>
            </div>
          </div>
          <div className="flex-1 bg-gray-50 rounded-xl p-3 flex items-center space-x-3">
            <div className="bg-blue-100/50 p-2 rounded-full">
              <Lock className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <div className="text-sm font-medium text-gray-900">提前锁团</div>
              <div className="text-xs text-gray-400 flex items-center mt-0.5">立即锁团 <ChevronRight className="w-3 h-3 ml-0.5" /></div>
            </div>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div>
        <h2 className="font-medium text-gray-900 mb-3 px-1">我的拼团</h2>
        <div className="space-y-3">
          <GroupOrderCard />
          <GroupOrderCard />
        </div>
      </div>
    </div>
  </div>
);

const GroupOrderCard = () => (
  <div className="bg-white rounded-2xl p-4 shadow-sm text-sm">
    <div className="space-y-2.5 mb-4">
      <div className="flex justify-between">
        <span className="text-gray-500">订单号</span>
        <span className="text-gray-900">SF1437829133905</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-500">预计发货时间</span>
        <span className="text-gray-900">2022/05/29</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-500">运送方式</span>
        <span className="text-gray-900">空运</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-500">地址</span>
        <span className="text-gray-900">West Covina,California US</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-500">邮编</span>
        <span className="text-gray-900">Zip Code 91790</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-500">货物类型</span>
        <span className="text-gray-900">敏感货</span>
      </div>
    </div>
    
    <div className="border-t border-gray-50 pt-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden mr-4">
          <div className="w-1/4 h-full bg-blue-600 rounded-full"></div>
        </div>
        <div className="text-xs">
          <span className="text-blue-600 font-medium">25kg</span>
          <span className="text-gray-400">/120kg</span>
        </div>
      </div>
      <div className="flex justify-end mt-3">
        <button className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-xs font-medium">
          管理拼团
        </button>
      </div>
    </div>
  </div>
);

// --- Screen 3: ApplyGroupLeader ---
const ApplyGroupLeader = () => (
  <div className="bg-gray-50 min-h-full flex flex-col">
    <div className="bg-white sticky top-0 z-10">
      <TopBar title="申请团长" isBlue={false} />
    </div>

    <div className="p-4 flex-1">
      <div className="bg-white rounded-2xl px-4 py-1 shadow-sm">
        <div className="flex items-center justify-between py-4 border-b border-gray-50">
          <span className="text-gray-700 text-sm">请选择绑定网点</span>
          <div className="flex items-center text-gray-400 text-sm">
            <span>请选择</span>
            <ChevronRight className="w-4 h-4 ml-1" />
          </div>
        </div>
        <div className="flex items-center justify-between py-4 border-b border-gray-50">
          <span className="text-gray-700 text-sm w-20">姓名</span>
          <input type="text" placeholder="请输入姓名" className="flex-1 text-right text-sm outline-none text-gray-900 placeholder-gray-300" />
        </div>
        <div className="flex items-center justify-between py-4 border-b border-gray-50">
          <span className="text-gray-700 text-sm w-20">电话</span>
          <input type="tel" placeholder="请输入电话号码" className="flex-1 text-right text-sm outline-none text-gray-900 placeholder-gray-300" />
        </div>
        <div className="flex items-center justify-between py-4 border-b border-gray-50">
          <span className="text-gray-700 text-sm w-20">验证码</span>
          <div className="flex-1 flex items-center justify-end space-x-3">
            <input type="text" placeholder="请输入验证码" className="w-24 text-right text-sm outline-none text-gray-900 placeholder-gray-300" />
            <div className="w-[1px] h-3 bg-gray-200"></div>
            <button className="text-blue-600 text-sm whitespace-nowrap">获取验证码</button>
          </div>
        </div>
        <div className="flex items-center justify-between py-4">
          <span className="text-gray-700 text-sm w-20">地址</span>
          <div className="flex items-center text-gray-400 text-sm">
            <span>请填写</span>
            <ChevronRight className="w-4 h-4 ml-1" />
          </div>
        </div>
      </div>
    </div>

    <div className="p-4 pb-8">
      <button className="w-full bg-blue-600 text-white py-3.5 rounded-full font-medium text-base shadow-md shadow-blue-600/20">
        提交申请
      </button>
    </div>
  </div>
);

// --- Screen 4 & 5: MyTeam ---
const MyTeam = ({ isEmpty = false }: { isEmpty?: boolean }) => (
  <div className="bg-gray-50 min-h-full flex flex-col">
    <div className="bg-white sticky top-0 z-10">
      <TopBar title="我的团队" isBlue={false} />
      <div className="flex px-4 border-b border-gray-100">
        <div className="flex-1 text-center py-3 text-sm font-medium text-blue-600 relative">
          全部客户
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-blue-600 rounded-t-full"></div>
        </div>
        <div className="flex-1 text-center py-3 text-sm text-gray-500">今日新增</div>
        <div className="flex-1 text-center py-3 text-sm text-gray-500">本周新增</div>
      </div>
    </div>

    <div className="p-4 flex-1">
      {isEmpty ? (
        <div className="h-full flex flex-col items-center justify-center pt-20">
          <div className="w-40 h-40 bg-gray-100 rounded-full mb-6 flex items-center justify-center relative">
             <Map className="w-16 h-16 text-blue-200" />
             <MapPin className="w-8 h-8 text-blue-400 absolute top-8" />
          </div>
          <p className="text-gray-500 text-sm mb-8">当前暂无客户，去邀请好友吧！</p>
          <button className="bg-blue-600 text-white px-12 py-3 rounded-full font-medium text-sm shadow-md shadow-blue-600/20">
            邀请好友
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          <TeamMemberCard />
          <TeamMemberCard />
          <TeamMemberCard />
        </div>
      )}
    </div>
  </div>
);

const TeamMemberCard = () => (
  <div className="bg-white rounded-2xl p-4 shadow-sm">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center space-x-3">
        <img src="https://i.pravatar.cc/150?img=32" alt="avatar" className="w-10 h-10 rounded-full object-cover" />
        <div>
          <div className="text-sm font-medium text-gray-900">梦想家Hyuk</div>
          <div className="text-xs text-gray-500 mt-0.5">手机号：187****6669</div>
        </div>
      </div>
      <div className="text-xs text-gray-400">2022/06/07</div>
    </div>
    
    <div className="bg-gray-50 rounded-xl p-3 space-y-2 text-sm">
      <div className="flex justify-between">
        <span className="text-gray-600">累计收益：</span>
        <span className="text-blue-600 font-medium">¥ 200</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-600">支付单数：</span>
        <span className="text-gray-900">145单</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-600">交易金额：</span>
        <span className="text-gray-900">¥ 24342.22</span>
      </div>
    </div>
  </div>
);

// --- Screen 6: RebateOrders ---
const RebateOrders = () => (
  <div className="bg-gray-50 min-h-full flex flex-col">
    <div className="bg-white sticky top-0 z-10">
      <TopBar title="返佣订单" isBlue={false} />
      <div className="flex px-2 border-b border-gray-100">
        <div className="flex-1 text-center py-3 text-sm font-medium text-blue-600 relative">
          全部订单
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-blue-600 rounded-t-full"></div>
        </div>
        <div className="flex-1 text-center py-3 text-sm text-gray-500">即将到账</div>
        <div className="flex-1 text-center py-3 text-sm text-gray-500">已到账</div>
        <div className="flex-1 text-center py-3 text-sm text-gray-500">无效订单</div>
      </div>
    </div>

    <div className="p-4 flex-1 space-y-3">
      <OrderCard status="即将到账" statusColor="text-blue-600" />
      <OrderCard status="交易成功" statusColor="text-green-500" />
      <OrderCard status="交易取消" statusColor="text-gray-400" />
    </div>
  </div>
);

const OrderCard = ({ status, statusColor }: { status: string, statusColor: string }) => (
  <div className="bg-white rounded-2xl p-4 shadow-sm text-sm">
    <div className="flex justify-between items-center mb-4 pb-3 border-b border-gray-50">
      <span className="text-gray-900 font-medium">2022/06/07 22:33:22</span>
      <span className={`${statusColor} text-xs`}>{status}</span>
    </div>
    
    <div className="space-y-2.5 mb-4">
      <div className="flex items-center">
        <div className="w-5 flex justify-center mr-2"><Compass className="w-4 h-4 text-gray-400" /></div>
        <span className="text-gray-500 w-20">寄送线路：</span>
        <span className="text-gray-900 flex-1 text-right">环欧视频/化妆品包税专线</span>
      </div>
      <div className="flex items-center">
        <div className="w-5 flex justify-center mr-2"><Clock className="w-4 h-4 text-gray-400" /></div>
        <span className="text-gray-500 w-20">计费重量：</span>
        <span className="text-gray-900 flex-1 text-right">34KG</span>
      </div>
      <div className="flex items-center">
        <div className="w-5 flex justify-center mr-2"><User className="w-4 h-4 text-gray-400" /></div>
        <span className="text-gray-500 w-20">订单编号：</span>
        <span className="text-gray-900 flex-1 text-right">243455543333</span>
      </div>
      <div className="flex items-center">
        <div className="w-5 flex justify-center mr-2"><FileText className="w-4 h-4 text-gray-400" /></div>
        <span className="text-gray-500 w-20">订单金额：</span>
        <span className="text-gray-900 flex-1 text-right">¥ 333.00元</span>
      </div>
    </div>
    
    <div className="border-t border-gray-50 pt-3 flex justify-end items-center">
      <span className="text-gray-600 mr-2">预计收益：</span>
      <span className="text-red-500 font-medium text-base">¥ 200</span>
    </div>
  </div>
);

// --- Screen 7: InitiateGroupBuy ---
const InitiateGroupBuy = () => (
  <div className="bg-gray-50 min-h-full flex flex-col">
    <div className="bg-white sticky top-0 z-10">
      <TopBar title="发起拼团" isBlue={false} />
    </div>

    <div className="p-4 flex-1 space-y-4">
      {/* Card 1 */}
      <div className="bg-white rounded-2xl px-4 py-1 shadow-sm">
        <div className="flex items-center justify-between py-4 border-b border-gray-50">
          <span className="text-gray-700 text-sm">开团时间</span>
          <div className="flex items-center text-gray-400 text-sm">
            <span>请选择</span>
            <ChevronRight className="w-4 h-4 ml-1" />
          </div>
        </div>
        <div className="flex items-center justify-between py-4 border-b border-gray-50">
          <span className="text-gray-700 text-sm">截止时间</span>
          <div className="flex items-center text-gray-400 text-sm">
            <span>请选择</span>
            <ChevronRight className="w-4 h-4 ml-1" />
          </div>
        </div>
        <div className="flex items-center justify-between py-4 border-b border-gray-50">
          <span className="text-gray-700 text-sm">拼团人数</span>
          <input type="text" placeholder="请输入拼团人数" className="flex-1 text-right text-sm outline-none text-gray-900 placeholder-gray-300" />
        </div>
        <div className="flex items-center justify-between py-4 border-b border-gray-50">
          <span className="text-gray-700 text-sm">拼团重量</span>
          <div className="flex items-center text-gray-400 text-sm">
            <span>请选择</span>
            <ChevronRight className="w-4 h-4 ml-1" />
          </div>
        </div>
        <div className="flex items-center justify-between py-4">
          <span className="text-gray-700 text-sm">拼团类型</span>
          <div className="flex items-center text-gray-400 text-sm">
            <span>请选择</span>
            <ChevronRight className="w-4 h-4 ml-1" />
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-2xl p-4 shadow-sm">
        <h2 className="font-medium text-gray-900 mb-2">收货地址</h2>
        <div className="flex items-center justify-between py-4 border-b border-gray-50">
          <span className="text-gray-700 text-sm w-20">姓名</span>
          <input type="text" placeholder="请输入姓名" className="flex-1 text-right text-sm outline-none text-gray-900 placeholder-gray-300" />
        </div>
        <div className="flex items-center justify-between py-4 border-b border-gray-50">
          <span className="text-gray-700 text-sm w-20">电话</span>
          <input type="tel" placeholder="请输入电话号码" className="flex-1 text-right text-sm outline-none text-gray-900 placeholder-gray-300" />
        </div>
        <div className="flex items-center justify-between py-4">
          <span className="text-gray-700 text-sm w-20">地址</span>
          <div className="flex items-center text-gray-400 text-sm">
            <span>请填写</span>
            <ChevronRight className="w-4 h-4 ml-1" />
          </div>
        </div>
      </div>
    </div>

    <div className="p-4 pb-8">
      <button className="w-full bg-blue-600 text-white py-3.5 rounded-full font-medium text-base shadow-md shadow-blue-600/20">
        发起拼团
      </button>
    </div>
  </div>
);

// --- Screen 8: StandardExpress ---
const StandardExpress = () => (
  <div className="bg-gray-50 min-h-full flex flex-col relative pb-24">
    <div className="bg-white sticky top-0 z-10">
      <TopBar title="标快件" isBlue={false} />
    </div>

    <div className="p-4 flex-1 space-y-4">
      {/* Card 1 */}
      <div className="bg-white rounded-2xl px-4 py-2 shadow-sm">
        <div className="flex items-center justify-between py-4 border-b border-gray-50">
          <div className="flex items-center">
            <span className="text-gray-700 text-sm mr-2">快递单号</span>
            <span className="text-[10px] text-blue-500 border border-blue-500 rounded-full px-1.5 py-0.5">必填</span>
          </div>
          <div className="flex items-center text-gray-400 text-sm">
            <span>请预报国内单号</span>
            <ChevronRight className="w-4 h-4 ml-1" />
          </div>
        </div>
        <div className="flex items-center justify-between py-4 border-b border-gray-50">
          <div className="flex items-center">
            <span className="text-gray-700 text-sm mr-2">货物名称</span>
            <span className="text-[10px] text-blue-500 border border-blue-500 rounded-full px-1.5 py-0.5">当前为食品专线</span>
          </div>
          <div className="flex items-center text-gray-400 text-sm">
            <span>请完善货物名称</span>
            <ChevronRight className="w-4 h-4 ml-1" />
          </div>
        </div>
        <div className="py-4 flex justify-center items-center text-gray-900 font-medium">
          添加 <Plus className="w-5 h-5 ml-1" />
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-2xl p-4 shadow-sm">
        <div className="flex items-center mb-4">
          <span className="text-gray-700 text-sm mr-4">保价</span>
          <span className="text-xs text-gray-400">未保价物品最高赔付2倍运费，建议足额报价</span>
        </div>
        
        <div className="flex space-x-3 mb-5">
          <div className="flex-1 bg-gray-50 rounded-lg p-3 flex items-center justify-between border border-gray-100">
            <span className="text-sm text-gray-700">价值1-350元</span>
            <div className="flex items-center">
              <span className="text-sm font-medium mr-1">¥5</span>
              <CheckCircle2 className="w-4 h-4 text-gray-300" />
            </div>
          </div>
          <div className="flex-1 bg-gray-50 rounded-lg p-3 flex items-center justify-between border border-gray-100">
            <span className="text-sm text-gray-700">自定义物品价值</span>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </div>
        </div>

        <div className="flex items-center justify-between pt-1">
          <span className="text-gray-700 text-sm">是否需要拍照</span>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1.5">
              <Circle className="w-4 h-4 text-gray-300" />
              <span className="text-sm text-gray-600">是</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <Circle className="w-4 h-4 text-gray-300" />
              <span className="text-sm text-gray-600">否</span>
            </div>
          </div>
        </div>
      </div>

      {/* Banner */}
      <div className="bg-orange-50 rounded-2xl p-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
            券
          </div>
          <span className="text-sm text-gray-800">邀请好友一起来领券！</span>
        </div>
        <button className="bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-xs font-medium">
          立即邀请
        </button>
      </div>

      {/* Checkbox */}
      <div className="flex items-center space-x-2 px-1">
        <Circle className="w-4 h-4 text-gray-300" />
        <span className="text-xs text-gray-400">我已阅读并同意遵守 <span className="text-gray-600">《极光转运服务条款》</span></span>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="absolute bottom-0 inset-x-0 bg-white border-t border-gray-100 p-4 flex items-center justify-between pb-8">
      <div>
        <div className="text-sm text-gray-900 mb-0.5">预估 <span className="text-blue-600 font-medium text-lg">--</span></div>
        <div className="text-[10px] text-gray-400">最终费用以仓库称重后开单为准</div>
      </div>
      <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium text-sm shadow-md shadow-blue-600/20">
        立即下单
      </button>
    </div>
  </div>
);

// --- Main App Component ---
export default function App() {
  const [currentScreen, setCurrentScreen] = useState('MyDistribution');

  const screens: Record<string, React.ReactNode> = {
    MyDistribution: <MyDistribution />,
    GroupLeaderCenter: <GroupLeaderCenter />,
    ApplyGroupLeader: <ApplyGroupLeader />,
    MyTeam: <MyTeam />,
    MyTeamEmpty: <MyTeam isEmpty={true} />,
    RebateOrders: <RebateOrders />,
    InitiateGroupBuy: <InitiateGroupBuy />,
    StandardExpress: <StandardExpress />
  };

  const screenNames: Record<string, string> = {
    MyDistribution: '我的分销 (My Distribution)',
    GroupLeaderCenter: '团长中心 (Group Leader Center)',
    ApplyGroupLeader: '申请团长 (Apply Group Leader)',
    MyTeam: '我的团队 (My Team)',
    MyTeamEmpty: '我的团队 - 空 (My Team Empty)',
    RebateOrders: '返佣订单 (Rebate Orders)',
    InitiateGroupBuy: '发起拼团 (Initiate Group Buy)',
    StandardExpress: '标快件 (Standard Express)'
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-200 items-center justify-center p-4 gap-8">
      {/* Navigation Menu */}
      <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col gap-3 w-full md:w-80">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Screens</h2>
        {Object.keys(screens).map(key => (
          <button
            key={key}
            onClick={() => setCurrentScreen(key)}
            className={`px-4 py-3 rounded-lg text-left transition-colors text-sm ${
              currentScreen === key 
                ? 'bg-blue-600 text-white font-medium' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {screenNames[key]}
          </button>
        ))}
      </div>

      {/* Mobile Simulator */}
      <div className="w-full max-w-[375px] h-[812px] bg-white rounded-[40px] shadow-2xl overflow-hidden relative border-[8px] border-gray-900 flex flex-col">
        {/* Notch */}
        <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-50">
          <div className="w-40 h-6 bg-gray-900 rounded-b-3xl"></div>
        </div>
        
        {/* Status Bar (Fake) */}
        <div className="absolute top-0 inset-x-0 h-10 flex items-center justify-between px-6 z-40 text-xs font-medium pointer-events-none">
          <span className={currentScreen === 'MyDistribution' || currentScreen === 'GroupLeaderCenter' ? 'text-white' : 'text-black'}>9:41</span>
          <div className={`flex items-center space-x-1.5 ${currentScreen === 'MyDistribution' || currentScreen === 'GroupLeaderCenter' ? 'text-white' : 'text-black'}`}>
            <Signal className="w-3.5 h-3.5" />
            <Wifi className="w-4 h-4" />
            <Battery className="w-5 h-5" />
          </div>
        </div>

        {/* Screen Content */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-hide">
          {screens[currentScreen]}
        </div>
        
        {/* Home Indicator */}
        <div className="absolute bottom-2 inset-x-0 flex justify-center z-50 pointer-events-none">
          <div className="w-32 h-1 bg-gray-900 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

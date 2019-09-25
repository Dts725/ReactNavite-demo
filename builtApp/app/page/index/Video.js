"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_native_1 = require("react-native");
var Net_1 = require("../../../utils/Net");
// import { StackNavigator } from 'react-navigation'
// const Navigator = StackNavigator(RouteConfig, StackNavigatorConfig);
// init()
var d = /** @class */ (function (_super) {
    __extends(d, _super);
    function d(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            data: null,
            flag: false,
            test: "测试数据"
        };
        return _this;
    }
    d.prototype.render = function () {
        if (this.state.flag) {
            return this.renderList();
        }
        else {
            return this.renderLoading();
        }
    };
    //获取数据
    d.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Net_1.Net.get('/admin/active/active_list?type=1&is_show=true')];
                    case 1:
                        res = _a.sent();
                        this.setState(function (state) {
                            return { data: res.data.data.data, flag: true };
                        });
                        console.log(res.data.data.data[0], '返回结果');
                        return [2 /*return*/];
                }
            });
        });
    };
    d.prototype.componentDidMount = function () {
        this.init();
    };
    d.prototype.renderLoading = function () {
        return (<react_native_1.View>
        <react_native_1.Text>加载中</react_native_1.Text>
      </react_native_1.View>);
    };
    d.prototype.Items = function (_a) {
        var name = _a.name, index = _a.index;
        return (<react_native_1.Text key={index}>{name}</react_native_1.Text>);
    };
    //获取数据后展示
    d.prototype.renderList = function () {
        return (<react_native_1.View>
        <react_native_1.Text style={{ textAlign: 'center', marginTop: 20 }}>视频</react_native_1.Text>
        <react_native_1.TextInput style={{ height: 40, borderColor: 'red', borderWidth: 1 }} placeholder='此处输入框' onChangeText={function (text) {
            console.log(text);
        }} value={this.text}/>


        <react_native_1.View style={{ display: 'flex', justifyContent: "center", alignItems: 'center' }}>

          <react_native_1.Image style={{
            width: '90%',
            height: 100,
        }} source={{ uri: 'http://language.chinadaily.com.cn/images/attachement/jpg/site1/20151010/00221910dbb41782b08f47.jpg' }}/>
        </react_native_1.View>

        <react_native_1.View style={{ display: 'flex', justifyContent: "center", alignItems: 'center', marginTop: 20 }}>
          <react_native_1.Image style={{
            width: '90%',
            height: 100,
        }} source={require('../../../image/btn.jpg')}/>
        </react_native_1.View>
       
        <react_native_1.FlatList data={this.state.data} renderItem={function (_a) {
            var item = _a.item;
            return <react_native_1.Text style={{ textAlign: 'center', marginTop: 10, marginBottom: 10 }} key={item.id}>{item.address}</react_native_1.Text>;
        }} keyExtractor={function (item, index) { return item.id.toString(); }}/>


      </react_native_1.View>);
    };
    return d;
}(react_1.Component));
exports.default = d;

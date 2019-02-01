'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _CSSClassnames = require('../../../utils/CSSClassnames');

var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

var _Intl = require('../../../utils/Intl');

var _Intl2 = _interopRequireDefault(_Intl);

var _Props = require('../../../utils/Props');

var _Props2 = _interopRequireDefault(_Props);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var CLASS_ROOT = _CSSClassnames2.default.CONTROL_ICON;
var COLOR_INDEX = _CSSClassnames2.default.COLOR_INDEX;

var Icon = function (_Component) {
  _inherits(Icon, _Component);

  function Icon() {
    _classCallCheck(this, Icon);

    return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
  }

  _createClass(Icon, [{
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          className = _props.className,
          colorIndex = _props.colorIndex;
      var _props2 = this.props,
          a11yTitle = _props2.a11yTitle,
          size = _props2.size,
          responsive = _props2.responsive;
      var intl = this.context.intl;


      var classes = (0, _classnames3.default)(CLASS_ROOT, CLASS_ROOT + '-platform-redhat', className, (_classnames = {}, _defineProperty(_classnames, CLASS_ROOT + '--' + size, size), _defineProperty(_classnames, CLASS_ROOT + '--responsive', responsive), _defineProperty(_classnames, COLOR_INDEX + '-' + colorIndex, colorIndex), _classnames));

      a11yTitle = a11yTitle || _Intl2.default.getMessage(intl, 'platform-redhat');

      var restProps = _Props2.default.omit(this.props, Object.keys(Icon.propTypes));
      return _react2.default.createElement(
        'svg',
        _extends({}, restProps, { version: '1.1', viewBox: '0 0 24 24', width: '24px', height: '24px', role: 'img', className: classes, 'aria-label': a11yTitle }),
        _react2.default.createElement('path', { fillRule: 'evenodd', d: 'M11.7749354,5.3508728 C11.7943796,5.51309589 11.7270763,5.6666771 11.0665362,5.71444227 C9.68031311,5.81471624 9.53636008,5.96454012 9.27658708,6.24089237 C8.91085714,6.63062231 8.42850881,5.7348728 8.42850881,5.7348728 C8.1389589,5.67414481 7.78807045,5.20753033 7.97772211,4.77177299 C8.16394521,4.3406184 8.50839922,4.47010568 8.61637573,4.60428963 C8.74774168,4.76773386 9.02799217,5.03478669 9.39156164,5.02515851 C9.75555382,5.0152955 10.1752485,4.93911546 10.760501,4.93911546 C11.3535969,4.93916243 11.7526262,5.16065753 11.7749354,5.3508728 L11.7749354,5.3508728 Z M14.6175499,17.4133855 C14.6064188,17.4133855 14.5968845,17.4176595 14.5898395,17.4255029 C14.4339569,17.6051507 14.3667476,17.6653151 14.2548258,17.7555382 C13.9841096,17.9729472 13.6747397,17.7274051 13.4769159,17.6108337 C13.0358513,17.3524227 12.6812055,17.5149276 12.5952564,17.7160861 C12.5087436,17.9172446 12.6040861,18.1594521 12.8443209,18.1281722 C13.1800391,18.0848219 13.1946928,18.1365793 13.4382622,18.2906771 C13.8906458,18.5777847 14.220681,18.4215264 14.3894325,18.2863562 C14.5300509,18.1746693 14.6083914,18.0783405 14.6812368,17.9422309 C14.8113346,17.685182 14.704908,17.4828963 14.6431468,17.4223562 C14.6367593,17.4168611 14.627319,17.4133855 14.6175499,17.4133855 L14.6175499,17.4133855 Z M14.0982387,3.03156164 C14.075225,3.03118591 14.0523523,3.03085714 14.0297143,3.03085714 C13.9004149,3.03212524 13.7658552,3.03926419 13.6279139,3.05340117 C13.1690959,3.10027397 12.7681409,3.21280626 12.4992094,3.35497456 C12.4863405,3.3608454 12.4777456,3.37352642 12.4777456,3.38799217 C12.4777456,3.4077182 12.4949354,3.42472016 12.5165871,3.42472016 C12.5183718,3.42472016 12.5204853,3.42443836 12.5226458,3.42410959 C12.5996243,3.41199217 12.679092,3.40156556 12.7605323,3.39325245 C13.5046732,3.31866928 14.1321957,3.44228571 14.1626771,3.66922896 C14.1851272,3.8407045 13.8616673,4.02237182 13.3815734,4.13335421 C13.3573386,4.13922505 13.339773,4.15956164 13.339773,4.18356164 C13.339773,4.20770254 13.3573386,4.22827397 13.380775,4.23414481 C13.5823562,4.29243053 13.8157808,4.32826614 14.0647515,4.33413699 C14.8343014,4.35132681 15.4649706,4.07380039 15.4739413,3.71422309 C15.4831937,3.35441096 14.8674129,3.04875147 14.0982387,3.03156164 L14.0982387,3.03156164 Z M22.0745988,18.5231155 L22.0745988,18.5227397 C21.6121174,18.416454 21.1215029,18.3493386 20.6250176,18.3493386 C19.7764227,18.3493386 19.0042896,18.4965793 18.4342074,18.7337143 C18.3715068,18.7645714 18.3269824,18.8306067 18.3269824,18.9051898 C18.3269824,18.9051898 18.3269824,18.9051898 18.3269824,18.9055656 C18.3269824,18.9323366 18.3340274,18.9602818 18.3445949,18.9832955 C18.3528141,19.0075303 18.358638,19.0321409 18.3609863,19.0571272 C18.3770489,19.2297769 18.2316869,19.4051507 17.7496673,19.5110137 C16.9324932,19.6908963 16.4164227,20.5340431 16.1211429,20.8137299 C15.7959452,21.1223014 14.9168219,21.3197965 14.9277652,21.18209 C14.9285636,21.1731663 14.9332603,21.1621761 14.9424658,21.1500587 C15.0576751,20.9965245 15.4985049,20.5180274 15.7666849,20.0002661 C16.0063562,19.5379726 16.219773,19.4067006 16.5137378,18.9657299 C16.6002975,18.8360078 16.9346536,18.3815577 17.0321096,18.0219804 C17.1410724,17.6707632 17.1041566,17.230544 17.1461918,17.0492994 C17.2063092,16.7877886 17.4532133,16.2200078 17.4717652,15.8998826 L17.4717652,15.8996947 L17.4717652,15.8988963 C17.4825205,15.7179804 16.7153659,16.157683 16.3512798,16.157683 C15.986818,16.157683 15.6319843,15.9398982 15.3069746,15.9242583 C14.9042348,15.9051429 14.6454481,16.2344266 14.281362,16.177409 C14.0731585,16.1438278 13.8981605,15.9602348 13.5343092,15.9467554 C13.0169237,15.9281566 12.3845166,16.2344266 11.1964462,16.1961957 C10.0276791,16.1582935 8.94838356,14.7196556 8.80095499,14.4908806 C8.62858708,14.2225127 8.41765949,14.2225127 8.18785127,14.4332524 C7.95780822,14.6438043 7.67469276,14.4785753 7.59362818,14.3369706 C7.44061057,14.0691663 7.03082583,13.2850098 6.39588258,13.1203444 C5.57321331,12.9073033 5.13102153,13.5211585 5.12655969,14.066818 C5.12618395,14.103546 5.12792172,14.1394755 5.13144423,14.1750763 C5.19005871,14.7512642 5.56259883,14.9127358 5.73524853,15.2190059 C5.90742857,15.5254638 5.99591389,15.7235225 6.32031311,15.8594442 C6.49268102,15.9309276 6.58417221,16.0287593 6.59004305,16.1527984 C6.59201566,16.1942231 6.58436008,16.238137 6.56731115,16.2854325 C6.50756947,16.4494873 6.26818004,16.4872016 6.11098239,16.4948102 C5.77634442,16.5108258 5.54221526,16.4197573 5.37116243,16.3114051 C5.17225832,16.1840783 5.01059883,16.0084697 4.83696282,15.7090568 C4.63618004,15.3793503 4.32018787,15.2350215 3.95159295,15.2350215 C3.77579648,15.2350215 3.61174168,15.2821292 3.46586301,15.3567123 C2.88859491,15.65791 2.20118982,15.8356321 1.4610411,15.8356321 L0.626864971,15.8360078 C0.626864971,15.8360078 0.626864971,15.8364305 0.626958904,15.8364305 L0.626864971,15.8364305 C0.220227006,14.6317339 0,13.3418865 0,12.0004697 C0,5.3727593 5.3730411,0 12.0002818,0 C18.6279452,0 24,5.3727593 24,12.0004697 C24,14.4051663 23.2929628,16.6450098 22.0745988,18.5231155 L22.0745988,18.5231155 Z M18.7718982,8.80762427 C18.6534951,9.20604305 18.4847906,9.71614873 17.7344031,10.1012759 C17.6253933,10.1568376 17.583593,10.0652524 17.634364,9.97920939 C17.9173855,9.49690802 17.9680157,9.37629746 18.0503953,9.18575342 C18.1656047,8.90785127 18.2261448,8.51225049 17.9964775,7.68695108 C17.545362,6.06270059 16.6035382,3.89189824 15.9195147,3.18791389 C15.2590215,2.50821135 14.0624971,2.31672798 12.9808532,2.5942544 C12.5828102,2.69659491 11.8032094,3.10187084 10.358137,2.77620352 C7.85687671,2.21269667 7.4861683,3.46544031 7.34277886,4.0109589 C7.19934247,4.55685323 6.85451272,6.10736595 6.85451272,6.10736595 C6.73986693,6.73869276 6.58938552,7.83715068 10.4728767,8.57668885 C12.2822231,8.92142466 12.3744188,9.38897847 12.4543092,9.72540117 C12.5980744,10.3283131 12.827319,10.6730489 13.0859178,10.8454168 C13.3445166,11.0179256 13.0859178,11.1606575 12.799045,11.1899648 C12.0287436,11.2698552 9.18068102,10.4531507 7.49598434,9.49592172 C6.1174638,8.65343249 6.09435616,7.8948728 6.40987867,7.25119374 C4.32765558,7.02608219 2.76535421,7.44671624 2.48195695,8.43231311 C1.99561644,10.1241018 6.20139335,13.0134012 10.9900274,14.4634051 C16.0156086,15.9850333 21.1837808,14.9227397 21.758184,11.76418 C22.0195068,10.3289237 20.8105362,9.2673816 18.7718982,8.80762427 L18.7718982,8.80762427 Z' })
      );
    }
  }]);

  return Icon;
}(_react.Component);

Icon.displayName = 'Icon';
exports.default = Icon;
;

Icon.contextTypes = {
  intl: _propTypes2.default.object
};

Icon.defaultProps = {
  responsive: true
};

Icon.displayName = 'PlatformRedhat';

Icon.icon = true;

Icon.propTypes = {
  a11yTitle: _propTypes2.default.string,
  colorIndex: _propTypes2.default.string,
  size: _propTypes2.default.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'huge']),
  responsive: _propTypes2.default.bool
};
module.exports = exports['default'];
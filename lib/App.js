var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _NewAppScreen=require("react-native/Libraries/NewAppScreen");var _this=this,_jsxFileName="C:\\Users\\Weronika\\asprojects\\Calc_2\\src\\App.js";var Section=function Section(_ref){var children=_ref.children,title=_ref.title;var isDarkMode=(0,_reactNative.useColorScheme)()==='dark';return _react.default.createElement(_reactNative.View,{style:styles.sectionContainer,__self:_this,__source:{fileName:_jsxFileName,lineNumber:32,columnNumber:5}},_react.default.createElement(_reactNative.Text,{style:[styles.sectionTitle,{color:isDarkMode?_NewAppScreen.Colors.white:_NewAppScreen.Colors.black}],__self:_this,__source:{fileName:_jsxFileName,lineNumber:33,columnNumber:7}},title),_react.default.createElement(_reactNative.Text,{style:[styles.sectionDescription,{color:isDarkMode?_NewAppScreen.Colors.light:_NewAppScreen.Colors.dark}],__self:_this,__source:{fileName:_jsxFileName,lineNumber:42,columnNumber:7}},children));};var App=function App(){var isDarkMode=(0,_reactNative.useColorScheme)()==='dark';var backgroundStyle={backgroundColor:isDarkMode?_NewAppScreen.Colors.darker:_NewAppScreen.Colors.lighter};return _react.default.createElement(_reactNative.SafeAreaView,{style:backgroundStyle,__self:_this,__source:{fileName:_jsxFileName,lineNumber:63,columnNumber:5}},_react.default.createElement(_reactNative.StatusBar,{barStyle:isDarkMode?'light-content':'dark-content',__self:_this,__source:{fileName:_jsxFileName,lineNumber:64,columnNumber:7}}),_react.default.createElement(_reactNative.ScrollView,{contentInsetAdjustmentBehavior:"automatic",style:backgroundStyle,__self:_this,__source:{fileName:_jsxFileName,lineNumber:65,columnNumber:7}},_react.default.createElement(_NewAppScreen.Header,{__self:_this,__source:{fileName:_jsxFileName,lineNumber:68,columnNumber:9}}),_react.default.createElement(_reactNative.View,{style:{backgroundColor:isDarkMode?_NewAppScreen.Colors.black:_NewAppScreen.Colors.white},__self:_this,__source:{fileName:_jsxFileName,lineNumber:69,columnNumber:9}},_react.default.createElement(Section,{title:"Step One",__self:_this,__source:{fileName:_jsxFileName,lineNumber:73,columnNumber:11}},"Edit ",_react.default.createElement(_reactNative.Text,{style:styles.highlight,__self:_this,__source:{fileName:_jsxFileName,lineNumber:74,columnNumber:18}},"App.js")," to change this screen and then come back to see your edits."),_react.default.createElement(Section,{title:"See Your Changes",__self:_this,__source:{fileName:_jsxFileName,lineNumber:77,columnNumber:11}},_react.default.createElement(_NewAppScreen.ReloadInstructions,{__self:_this,__source:{fileName:_jsxFileName,lineNumber:78,columnNumber:13}})),_react.default.createElement(Section,{title:"Debug",__self:_this,__source:{fileName:_jsxFileName,lineNumber:80,columnNumber:11}},_react.default.createElement(_NewAppScreen.DebugInstructions,{__self:_this,__source:{fileName:_jsxFileName,lineNumber:81,columnNumber:13}})),_react.default.createElement(Section,{title:"Learn More",__self:_this,__source:{fileName:_jsxFileName,lineNumber:83,columnNumber:11}},"Read the docs to discover what to do next:"),_react.default.createElement(_NewAppScreen.LearnMoreLinks,{__self:_this,__source:{fileName:_jsxFileName,lineNumber:86,columnNumber:11}}))));};var styles=_reactNative.StyleSheet.create({sectionContainer:{marginTop:32,paddingHorizontal:24},sectionTitle:{fontSize:24,fontWeight:'600'},sectionDescription:{marginTop:8,fontSize:18,fontWeight:'400'},highlight:{fontWeight:'700'}});var _default=App;exports.default=_default;
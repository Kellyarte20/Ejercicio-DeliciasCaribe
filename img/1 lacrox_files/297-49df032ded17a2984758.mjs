(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[297],{"7vSn":function(e,t,i){},e3KR:function(e,t,i){i.d(t,"c",(function(){return z})),i.d(t,"b",(function(){return G})),i.d(t,"a",(function(){return D}));var n=i("q1tI"),o=i("/MKj"),r=(i("7vSn"),i("8cMa")),s=i("s7xj"),a=i("n6mq"),c=i("nKUr");const d=({collaborator_count:e,useLegoLayout:t,type:i})=>t?Object(c.jsx)(a.e,{marginEnd:e?2:0,children:Object(c.jsx)(r.a,{type:i})}):Object(c.jsx)(r.a,{type:i});var l=({board:e,showCollaborativeIcon:t,showPrivateIcon:i,showProtectedIcon:n,showSectionsIcon:o,useLegoLayout:l})=>{var h;const u=(null==e||null===(h=e.collaborating_users)||void 0===h?void 0:h.length)||0;return t||i||n||o?Object(c.jsxs)(a.e,{display:"flex",direction:"row",marginEnd:l?0:5,dangerouslySetInlineStyle:{__style:{paddingLeft:8}},alignItems:"center",children:[i&&Object(c.jsx)(d,{collaborator_count:u,useLegoLayout:l,type:"secret"}),n&&Object(c.jsx)(d,{collaborator_count:u,useLegoLayout:l,type:"protected"}),t&&(l?Object(c.jsx)(s.a,{board:e,isCompact:!0,ownerOnly:!1}):Object(c.jsx)(r.a,{type:"group"})),o&&Object(c.jsx)(r.a,{type:"sections"})]}):null},h=i("JW66"),u=i("Ye/N"),b=i("4cpq");function g(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class j extends n.Component{constructor(...e){super(...e),g(this,"state",{hovered:!1}),g(this,"handleMouseEnter",()=>{this.setState({hovered:!0})}),g(this,"handleMouseLeave",()=>{this.setState({hovered:!1})}),g(this,"handleTouch",()=>{const{board:e,onClick:t}=this.props;t(e)}),g(this,"handleButtonClick",({event:e})=>{const{onButtonClick:t}=this.props;this.handleTouch(),t&&t(),e.stopPropagation()}),g(this,"tapAreaRef",Object(n.createRef)())}focus(){const e=this.tapAreaRef.current;e&&e.focus()}render(){const{hovered:e}=this.state,{board:t,buttonText:i,isSectionOpen:n,shouldOpenSections:o,showFlyoutSaveButton:r,useLegoLayout:s}=this.props,d=!!t.section_count&&t.section_count>0,g=d?"boardWithSection":"boardWithoutSection",j=t.image_cover_url;return Object(c.jsx)(b.a,{id:g,children:Object(c.jsx)(a.X,{onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,onTap:this.handleTouch,ref:this.tapAreaRef,children:Object(c.jsxs)(a.e,{color:e?"lightGray":"white",display:"flex",alignItems:"center",height:s?64:52,marginStart:s?2:3,marginEnd:s?2:3,marginBottom:s?0:1,marginTop:s?0:1,padding:s?2:0,rounding:3,children:[Object(c.jsxs)(a.e,{"aria-hidden":"true",flex:"none",marginBottom:s?0:1,marginStart:s?0:2,marginEnd:s?2:3,marginTop:s?0:1,overflow:"hidden",width:s?48:36,height:s?48:36,children:[j&&!o&&Object(c.jsx)(a.B,{rounding:2,wash:!0,width:s?48:36,height:s?48:36,children:Object(c.jsx)(a.w,{src:j,alt:"",naturalHeight:s?48:36,naturalWidth:s?48:36,fit:"cover"})}),j&&o?Object(c.jsx)(a.B,{rounding:2,wash:!0,width:s?48:36,height:s?48:36,children:Object(c.jsx)(a.w,{src:j,alt:"",naturalHeight:s?48:36,naturalWidth:s?48:36,fit:"cover"})}):Object(c.jsx)(a.e,{color:o?"lightGray":"transparent",width:"100%",height:"100%"})]}),Object(c.jsx)(a.e,{flex:"grow",paddingY:1,overflow:"hidden",marginStart:s?0:1,children:Object(c.jsx)(a.Y,{truncate:!0,weight:o||!o?"bold":"normal",children:t.name})}),t&&(!e||e&&d&&!n)?Object(c.jsx)(a.e,{children:Object(c.jsx)(l,{board:t,isOpen:t.isOpen,showCollaborativeIcon:!!t.is_collaborative,showPrivateIcon:t.privacy===h.a.BoardPrivacy.SECRET,showProtectedIcon:t.privacy===h.a.BoardPrivacy.PROTECTED,showSectionsIcon:d&&o,useLegoLayout:s})}):null,e&&(0===t.section_count||!o)&&r&&Object(c.jsx)(a.e,{marginEnd:s?0:2,flex:"none",children:Object(c.jsx)(a.f,{accessibilityLabel:"save button",color:"red",inline:!0,onClick:this.handleButtonClick,text:i||u.a._("Save","save button","save button")})})]})})})}}g(j,"defaultProps",{shouldOpenSections:!0,showFlyoutSaveButton:!0});var p=({image_url:e,naturalHeight:t,naturalWidth:i})=>Object(c.jsx)(a.e,{"aria-hidden":"true",marginBottom:1,marginEnd:2,marginTop:1,overflow:"hidden",width:48,height:48,children:Object(c.jsx)(a.B,{wash:!0,width:48,height:48,rounding:2,children:Object(c.jsx)(a.w,{src:e,alt:"",naturalHeight:t,naturalWidth:i})})});function x(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class f extends n.Component{constructor(...e){super(...e),x(this,"state",{hovered:!1}),x(this,"handleMouseEnter",()=>{this.setState({hovered:!0})}),x(this,"handleMouseLeave",()=>{this.setState({hovered:!1})}),x(this,"handleTouch",()=>{const{board:e,onClick:t,section:i}=this.props;t(i,e)}),x(this,"handleButtonClick",({event:e})=>{const{onButtonClick:t}=this.props;this.handleTouch(),t&&t(),e.stopPropagation()}),x(this,"tapAreaRef",Object(n.createRef)())}focus(){const e=this.tapAreaRef.current;e&&e.focus()}render(){var e;const{hovered:t}=this.state,{buttonText:i,section:n,showSectionSaveButton:o,useLegoLayout:r}=this.props;return Object(c.jsx)(a.X,{onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,onTap:this.handleTouch,ref:this.tapAreaRef,children:Object(c.jsxs)(a.e,{color:t?"lightGray":"white",display:"flex",alignItems:"center",height:r?64:52,marginStart:r?2:0,marginEnd:r?2:0,padding:r?2:0,marginTop:r?0:1,rounding:3,dangerouslySetInlineStyle:{__style:r?{}:{marginLeft:53,marginRight:11}},children:[r&&!(null===(e=n.preview_pins)||void 0===e||!e.length)&&Object(c.jsx)(p,{image_url:n.preview_pins[0].image_square_url,naturalHeight:n.preview_pins[0].image_square_size_pixels.height,naturalWidth:n.preview_pins[0].image_square_size_pixels.width}),Object(c.jsx)(a.e,{flex:"grow",paddingY:1,marginStart:r?0:4,children:Object(c.jsx)(a.Y,{truncate:!0,weight:r?"bold":"normal",children:n.title})}),t&&o&&Object(c.jsx)(a.e,{marginEnd:r?0:2,flex:"none",children:Object(c.jsx)(a.f,{accessibilityLabel:"save button",color:"red",inline:!0,text:i||u.a._("Save","save button","save button"),onClick:this.handleButtonClick})})]})})}}x(f,"defaultProps",{showSectionSaveButton:!0});var y=i("w70y");var O=Object(y.b)({name:"BoardSectionsRepinResource",key:"sectionsResource",options:e=>({board_id:e.board.id}),allowStale:!1})(e=>{const{board:t,buttonText:i,sectionsResource:n,onClick:o,onButtonClick:r,showSectionSaveButton:s,useLegoLayout:d}=e,l=n&&n.data||[];return Object(c.jsxs)(a.e,{children:[!n.isLoaded&&Object(c.jsx)(a.e,{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",minHeight:200,children:Object(c.jsx)(a.R,{accessibilityLabel:u.a._("loading board picker","accessibility text for loading spinner","accessibility text for loading spinner"),show:!0})}),n.isLoaded&&Object(c.jsxs)(a.e,{children:[d&&Object(c.jsx)(a.e,{marginStart:4,marginTop:2,paddingY:1,children:Object(c.jsx)(a.Y,{size:"sm",children:u.a._("Section","PinBetterSave.BoardFlyout.SectionPlaceholderText","section list title")})}),l.map(e=>Object(c.jsx)(f,{board:t,buttonText:i,onButtonClick:r,onClick:o,section:e,showSectionSaveButton:s,useLegoLayout:d},e.id))]})]})});function m({isBoardCreate:e,onCreateBoardClick:t,useLegoLayout:i}){const[o,r]=Object(n.useState)(!1);return Object(c.jsx)(a.e,{"data-test-id":"create-board",height:"100%",display:"flex",children:Object(c.jsx)(a.X,{onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),onTap:t,rounding:2,children:Object(c.jsxs)(a.e,{display:"flex",alignItems:"center",padding:i?4:2,color:o?"lightGray":"white",width:"100%",height:"100%",children:[Object(c.jsx)(a.e,{rounding:i?2:0,dangerouslySetInlineStyle:{__style:i?{padding:"14px"}:{}},marginStart:i?0:4,marginEnd:i?2:5,color:i?"lightGray":"transparent",children:Object(c.jsx)(a.u,{accessibilityLabel:"Add a board",size:i?20:28,icon:i?"add":"add-circle",color:i?"darkGray":"red"})}),e?Object(c.jsx)(a.Y,{align:"center",truncate:!0,weight:"bold",children:u.a._("Create board")}):Object(c.jsx)(a.Y,{align:"center",truncate:!0,weight:"bold",children:u.a._("Create section")})]})})})}var S=i("nKlH"),v=i("eOdZ"),w=i("3DIk");function B({onClick:e,title:t,showIcon:i}){const[o,r]=Object(n.useState)(!1);return Object(c.jsx)(a.X,{onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),onTap:()=>{e({title:t})},children:Object(c.jsxs)(a.e,{color:o?"lightGray":"white",display:"flex",alignItems:"center",height:i?64:52,marginStart:3,marginEnd:3,marginBottom:1,rounding:3,children:[Object(c.jsx)(a.e,{flex:"none",marginBottom:1,marginStart:i?1:2,marginEnd:3,marginTop:1,overflow:"hidden",width:i?48:36,height:i?48:36,rounding:i?2:1,children:Object(c.jsx)(a.e,{color:"lightGray",width:"100%",height:"100%",display:i?"flex":void 0,alignItems:i?"center":void 0,justifyContent:i?"center":void 0,children:i&&Object(c.jsx)(a.u,{icon:"add",color:"darkGray",size:20,accessibilityLabel:u.a._("Create board icon","BoardSuggestionRow.AccessibilityLabel.Text","accessibility label text form add icon")})})}),Object(c.jsx)(a.e,{flex:"grow",paddingY:1,children:Object(c.jsx)(a.Y,{truncate:!0,weight:"bold",children:t})}),o&&Object(c.jsx)(a.e,{marginEnd:2,children:Object(c.jsx)(a.f,{accessibilityLabel:"create button",color:"red",inline:!0,text:u.a._("Create","create button to create a new board","create button to create a new board")})})]})})}const _=e=>{const{suggestionsResource:t,onClick:i,pinBuilderSuggestions:o,inWebRepinFlowExp:r}=e,s=o||t&&t.data||[],d=Object(c.jsxs)(n.Fragment,{children:[r&&Object(c.jsx)(a.e,{marginStart:4,marginTop:2,paddingY:1,children:Object(c.jsx)(a.Y,{size:"sm",children:u.a._("Suggestions","PinBetterSave.BoardFlyout.SectionPlaceholderText","section list title")})}),s.map((e,t)=>Object(c.jsx)(B,{title:e.title,onClick:i,showIcon:r},t))]});return Object(c.jsx)(n.Fragment,{children:s?d:Object(c.jsx)(a.e,{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",minHeight:200,children:Object(c.jsx)(a.R,{accessibilityLabel:u.a._("loading board suggestions","accessibility text for loading spinner","accessibility text for loading spinner"),show:!0})})})};var C=i("0BOE"),L=i("eUcp"),k=i("Wer7"),R=i("qyR9"),I=i("U4JR"),T=i("pLLR"),P=i("seP0"),E=i("ANjH");function H(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}const F=e=>e?498:439,M=360,A=e=>e?80:52;class q extends n.PureComponent{constructor(...e){var t;super(...e),t=this,H(this,"state",{boardSuggestions:[],isSectionOpen:null,selectedBoardId:"",selectedBoardCategory:"",searchQuery:"",searchBoxFocused:!0}),H(this,"getItems",e=>{const{boardResource:t,suggestedBoardsShortListResource:i,displayShortlistMostRecentBoard:n}=this.props;if(!t||!t.data)return[];const{all_boards:o,boards_shortlist:r}=t&&t.data,s=o.filter(e=>!this.props.advertiser_id||"secret"!==e.privacy).map(e=>this.mapBoards(e,"allBoards",0)),a=n?r.map((e,t)=>this.mapBoards(e,"shortlist",t+1)):(i&&i.data||[]).map((e,t)=>this.mapBoards(e,"shortlist",t+1)),{searchQuery:c}=this.state;return c.length>=R.a?[...Object(C.a)(s,c)]:[...o.length>3&&a&&a.length?[{type:"header",title:e?u.a._("Top choices","PinBetterSave.BoardFlyout.TopChoicesSectionTitle","Header for top suggestions in board picker"):u.a._("Top board suggestions","Header for top suggesions in board picker","Header for top suggesions in board picker")},...a]:[],{type:"header",title:u.a._("All boards","Header for all boards in board picker","Header for all boards in board picker")},...s,...s.length<=3?[{type:"header",title:u.a._("Suggested board names","Header for suggested boards in board picker","Header for suggested boards in board picker")}]:[]]}),H(this,"mapBoards",(e,t,i)=>{const{setBoardWithSection:n}=this.props,{selectedBoardId:o,selectedBoardCategory:r}=this.state,s=e.id===o&&t===r;return s&&n&&n(e),{...e,category:t,isOpen:s,gridIndex:i}}),H(this,"handleBack",()=>{const{setBoardWithSection:e}=this.props;this.setState({isSectionOpen:!1,selectedBoardId:"",selectedBoardCategory:""}),e&&e(null)}),H(this,"handleSectionClick",(e,t)=>{const{onItemChosen:i}=this.props;Object(I.b)(101,{component:13282,element:36,objectId:t.id,view:91,grid_index:t.gridIndex}),i({boardId:t.id,url:e.slug?`${t.url}${e.slug}/`:t.url,sectionId:e.id,title:e.title||"",imageCoverUrl:t.image_cover_url})}),H(this,"getPinBuilderSuggestions",(async function(){const{pin:e}=t.props;if(e){var i;const n=v.a.create("BoardTitleSuggestionsResource",{pin_id:e.id}),o=await n.callGet({showError:!1},{retries:1});if(null!==(i=o.resource_response)&&void 0!==i&&i.data){const e=o.resource_response.data.map(e=>({title:e.title}))||[];t.setState({boardSuggestions:e})}}})),H(this,"handleBoardWithSectionsClick",e=>{const{selectedBoardId:t,selectedBoardCategory:i}=this.state,n=t===e.id&&i===e.category;this.setState({isSectionOpen:!0,selectedBoardId:n?"":e.id,selectedBoardCategory:n?"":e.category})}),H(this,"handleBoardClick",({board:e,toggleSections:t})=>{const{onItemChosen:i}=this.props;this.setState({searchBoxFocused:!1}),t?this.handleBoardWithSectionsClick({id:e.id,category:e.category}):(Object(I.b)(101,{component:13282,element:36,objectId:e.id,view:91,grid_index:e.gridIndex}),i({boardId:e.id,url:e.url,title:e.name||"",imageCoverUrl:e.image_cover_url}))}),H(this,"handleSearchQueryUpdate",e=>{this.setState(t=>({...t,searchQuery:e}))}),H(this,"boardSectionsHeaderRef",Object(n.createRef)())}componentDidMount(){this.props.boardResource&&this.props.boardResource.isLoaded&&this.setPWTLoadingEnd()}componentDidUpdate(e,t){e.boardResource&&!e.boardResource.isLoaded&&this.props.boardResource&&this.props.boardResource.isLoaded&&this.setPWTLoadingEnd(),this.state.isSectionOpen&&!t.isSectionOpen&&this.boardSectionsHeaderRef.current&&this.boardSectionsHeaderRef.current.focus()}setPWTLoadingEnd(){const{boardResource:e,boardPickerStopwatch:t}=this.props;t&&(!e||e.error?t.error():t.stop())}render(){const{boardResource:e,buttonText:t,customItem:i,onBoardCreate:o,onButtonClick:r,paneWidth:s,showCreateBoardButton:d,showFlyoutSaveButton:l,showSections:h,showSectionSaveButton:g,suggestedBoardsShortListResource:p,useStoryboardStyle:x,useLegoLayout:f}=this.props,{boardSuggestions:y,isSectionOpen:v,searchBoxFocused:w,searchQuery:B}=this.state;if(!e)return null;const{isLoaded:C,error:k}=e;let R=[];(C&&!k||p&&p.data&&!p.error)&&(R=this.getItems(!!f));const I=R.filter(e=>e&&"allBoards"===e.category).length;I<=3&&0===y.length&&this.getPinBuilderSuggestions();const T=x?200:322,P=x?214:334,E=null===v?"":"BoardsSlideRight",H=e=>Object(c.jsxs)(n.Fragment,{children:[!f&&Object(c.jsx)(a.o,{}),Object(c.jsx)(a.e,{overflow:"hidden",height:A(f),borderStyle:f&&I>=3&&R.length>1?"shadow":"none",dangerouslySetInlineStyle:{__style:{borderBottomRightRadius:8,borderBottomLeftRadius:8}},children:Object(c.jsx)(m,{onCreateBoardClick:()=>o({title:this.state.searchQuery}),isBoardCreate:e,useLegoLayout:f})})]});return Object(c.jsxs)(a.e,{width:f?"100%":s,rounding:2,overflow:"hidden",height:x?"100%":F(f),color:"white",zIndex:L.a,children:[C?null:Object(c.jsx)(a.e,{display:"flex",alignItems:"center",justifyContent:"center",width:f?M:s,height:"100%",minHeight:200,children:Object(c.jsx)(a.R,{accessibilityLabel:u.a._("loading board picker","accessibility text for loading spinner","accessibility text for loading spinner"),show:!0})}),Object(c.jsx)(a.e,{display:"flex",direction:"row",children:C&&Object(c.jsx)("div",{className:v?"BoardsSlideLeft":E,children:Object(c.jsx)(a.e,{position:"relative",children:Object(c.jsxs)(a.e,{display:"flex",direction:"row",width:f?720:2*s,zIndex:new a.q(0),children:[Object(c.jsxs)(a.e,{display:"flex",direction:"column",width:f?M:s,children:[f&&Object(c.jsx)(a.e,{height:64,display:"flex",alignItems:"center",justifyContent:"center",children:Object(c.jsx)(a.Y,{align:"center",size:"lg",weight:"bold",children:u.a._("Save to board","PinBetterSave.BoardFlyout.SaveToBoardPlaceholder","flyout header text")})}),Object(c.jsx)(a.e,{padding:f?0:3,paddingX:f?4:3,height:f?64:"auto",children:Object(c.jsx)(S.a,{accessibilityLabel:u.a._("Search through your boards","search bar placeholder text","search bar placeholder text"),focused:w,id:"pickerSearchField",onChange:({value:e})=>this.handleSearchQueryUpdate(e),placeholder:u.a._("Search","search bar placeholder text","search bar placeholder text"),value:B})}),Object(c.jsxs)(a.e,{minHeight:f?290:T,maxHeight:f?290:T,overflow:"scrollY",children:[p&&!p.isLoaded?Object(c.jsx)(b.a,{id:"suggestedBoardsContainer",children:Object(c.jsx)(a.e,{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",minHeight:128.5,children:Object(c.jsx)(a.R,{accessibilityLabel:u.a._("loading board picker","accessibility text for loading spinner","accessibility text for loading spinner"),show:!0})})}):null,i,R.map((e,i)=>"header"===e.type?Object(c.jsx)(a.e,{paddingX:f?4:3,paddingY:1,marginTop:i>0?2:1,children:Object(c.jsx)(a.Y,{size:f?"sm":"md",children:e.title})},e.title):Object(c.jsx)(a.e,{children:Object(c.jsx)(j,{board:e,buttonText:t,onClick:e=>{this.handleBoardClick({board:e,toggleSections:h&&!!e.section_count})},onButtonClick:r,shouldOpenSections:h,showFlyoutSaveButton:l,useLegoLayout:f})},`${e.category}-${e.id}`)),I<=3&&Object(c.jsx)(_,{onClick:o,pinBuilderSuggestions:y,inWebRepinFlowExp:f})]}),d&&H(!0)]}),Object(c.jsxs)(a.e,{display:"flex",direction:"column",width:f?M:s,marginBottom:f?2:0,children:[Object(c.jsxs)(a.e,{display:"flex",direction:"row",justifyContent:"center",alignContent:"center",alignItems:"center",children:[Object(c.jsx)(a.l,{span:2,children:Object(c.jsx)(a.e,{display:"flex",justifyContent:"start",alignContent:"center",alignItems:"center",marginStart:3,children:Object(c.jsx)(a.v,{accessibilityLabel:"Back button",icon:"arrow-back",iconColor:"darkGray",onClick:this.handleBack,size:"sm"})})}),Object(c.jsx)(a.l,{span:8,children:Object(c.jsx)(a.e,{display:"flex",justifyContent:"center",alignItems:"center",height:f?64:52,children:Object(c.jsx)(a.Y,{weight:"bold",children:f?u.a._("Save Pin to","PinBetterSave.BoardFlyout.SectionHeader","Header for section header"):u.a._("Choose section","Header for section header","Header for section header")})})}),Object(c.jsx)(a.l,{span:2,children:Object(c.jsx)(a.e,{})})]}),!f&&Object(c.jsx)(a.o,{}),Object(c.jsx)(a.e,{minHeight:f?354:P,maxHeight:f?354:P,overflow:"scrollY",children:R?Object(c.jsx)(n.Fragment,{children:R&&R.map(e=>"header"===e.type?null:Object(c.jsx)(a.e,{children:e.isOpen&&Object(c.jsxs)(n.Fragment,{children:[f&&Object(c.jsx)(a.e,{marginStart:4,marginTop:2,paddingY:1,children:Object(c.jsx)(a.Y,{size:"sm",children:u.a._("Board","PinBetterSave.BoardFlyout.BoardPickerTitle","board title on section picker")})}),Object(c.jsx)(j,{board:e,buttonText:t,isSectionOpen:!0,onClick:e=>{this.handleBoardClick({board:e,toggleSections:!1})},onButtonClick:r,shouldOpenSections:!1,showFlyoutSaveButton:l,ref:this.boardSectionsHeaderRef,useLegoLayout:f}),Object(c.jsx)(O,{board:e,buttonText:t,onClick:this.handleSectionClick,onButtonClick:r,showSectionSaveButton:g,useLegoLayout:f})]})},`${e.category}-${e.id}`))}):null}),d&&H(!1)]})]})})})})]})}}function Y(e){return Object(c.jsx)(q,{...e,boardPickerStopwatch:Object(P.c)(),requestContext:Object(T.d)()})}function W(e){const{advertiser:t,viewer:i}=e;if(i&&t){var n;const t=e.advertiser;if(i.isAuth&&(null===(n=t.admin_mode_info)||void 0===n?void 0:n.version)===w.a)return{hasMUA:!1,advertiser_id:t.id,username:t.owner_user_id};if(i.isAuth&&t.owner_user_id!==i.id)return{hasMUA:!0,advertiser_id:t.id,username:t.owner_user_id};if(i.isAuth&&t.owner_user_id===i.id)return{hasMUA:!1,advertiser_id:t.id,username:"me"}}return{advertiser_id:void 0,hasMUA:void 0,username:void 0}}function U(e){const{advertiser_id:t,hasMUA:i,username:n}=e;return{field_set_key:"board_picker",filter:i?"protected":"all",...n?{username:n}:{},...t?{advertiser_id:t}:{}}}function z(){return(e,t)=>e(Object(k.f)("BoardPickerBoardsResource",U(W(t()))))}H(q,"defaultProps",{paneWidth:320,showCreateBoardButton:!0,showFlyoutSaveButton:!0,showSections:!0,showSectionSaveButton:!0,useLegoLayout:!0});const G=Object(E.compose)(Object(o.connect)((function(e){return W(e)})),Object(y.b)({name:"BoardPickerBoardsResource",key:"boardResource",options:U}))(Y),D=Object(y.b)({name:"BoardPickerBoardsShortlistResource",key:"suggestedBoardsShortListResource",options:e=>({pin_id:e.pin.id,shortlist_length:3,num_shortlist_suggestions:3})})(Y)},eUcp:function(e,t,i){i.d(t,"j",(function(){return o})),i.d(t,"f",(function(){return r})),i.d(t,"c",(function(){return s})),i.d(t,"a",(function(){return a})),i.d(t,"d",(function(){return c})),i.d(t,"l",(function(){return d})),i.d(t,"i",(function(){return l})),i.d(t,"k",(function(){return h})),i.d(t,"h",(function(){return u})),i.d(t,"e",(function(){return b})),i.d(t,"b",(function(){return g})),i.d(t,"g",(function(){return j})),i.d(t,"m",(function(){return p}));var n=i("n6mq");const o=new n.q(0),r=new n.q(1),s=2,a=new n.q(s),c=2,d=new n.q(c),l=new n.q(3),h=new n.q(1),u=new n.q(3),b=3,g=4,j=(new n.q(g),new n.q(5)),p=new n.q(100)},nKlH:function(e,t,i){i.d(t,"a",(function(){return s}));var n=i("q1tI"),o=i("n6mq"),r=i("nKUr");function s(e){const{accessibilityLabel:t,focused:i,id:s,onBlur:a,onChange:c,onFocus:d,placeholder:l,value:h,size:u="lg"}=e,b=Object(n.useRef)(null);return Object(n.useEffect)(()=>{if(i){const e=b.current;window.requestAnimationFrame(()=>{const t=e&&e.querySelector("input");t instanceof HTMLInputElement&&t.focus()})}},[i]),Object(r.jsx)(o.e,{ref:b,children:Object(r.jsx)(o.N,{accessibilityLabel:t,id:s,onBlur:a,onChange:c,onFocus:d,placeholder:l,size:u,value:h})})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/297-49df032ded17a2984758.mjs.map
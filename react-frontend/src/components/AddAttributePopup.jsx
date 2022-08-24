import React, { Component } from 'react'



class AddAttributePopup extends Component {
	
	
    constructor(props) {
        super(props)

        this.state = {
              field: "",
			  gt: "",
			  gtVal: "",
			  lt: "",
			  ltVal: "",
			  equal: "",
			  equalVal: "",
			  dataString: "",
			  callbackFunction: "",
			  currentRestrictions: []
        }
		this.addNewRestriction = this.addNewRestriction.bind(this);
		this.subRestriction = this.subRestriction.bind(this);
		this.dataStringRelationLoad = this.dataStringRelationLoad.bind(this);
		this.saveRestrictions = this.saveRestrictions.bind(this);
    }
	
	sendData(newRestriction) {
         this.props.parentCallback(newRestriction);
    }
	

	addRestriction = (cond) => (
		<div className="restrictionEditRow">
			<button id="subRestriction" name={cond} onClick={() => this.subRestriction(cond) }><b>-</b></button> &nbsp;
			<a> {this.props.field} </a> &nbsp;
				{this.dataStringRelationLoad()} &nbsp;
			<input type="text" size="1" id="relationVal"></input> &nbsp;
			<button className="btn-primary" onClick={() => this.filterData(cond) }>Save</button>
		</div>
	)
	
	filterData(cond) {
		var relationDrop = document.getElementById("relation");
		var relation = relationDrop.options[relationDrop.selectedIndex].value;
		
		var relationVal = document.getElementById("relationVal").value;
		let newArray = [...this.props.currentRestrictions];
		
		
		for (let i = 0; i < newArray.length; i++) {
			if ((newArray[i])["field"] == this.props.field) {
				(newArray[i])[relation] = true;
				(newArray[i])[relation+"Val"] = relationVal;
			}
		}
		
		this.subRestriction(cond);
		var addButton = document.getElementById("addRestriction");
		addButton.style.display = "block";
		this.sendData(newArray);
		var tag = document.createElement("li");
		
		var relationChar = '';
		if (relation == "gt") {
			relationChar = '>';
		}
		if (relation == "lt") {
			relationChar = '<';
		}
		if (relation == "eq") {
			relationChar = '=';
		}
		
		var tagText = document.createTextNode(this.props.field+" "+relationChar+" "+relationVal);
		tag.appendChild(tagText);
		
		var element = document.getElementById("restrictionList");
		element.appendChild(tag);
	}
	
	
	dataStringRelationLoad() {
		if (!this.props.dataString) {
			return (
			<select name="relation" id="relation">
				<option value="gt">></option>
				<option value="lt">&lt;</option>
				<option value="eq">=</option>
			</select>);
		} else {
			return (
			<a> = </a>
			);
		}
	}
	
	
	buildRestrictionsList = () => {
		let array = [];
		
		if (this.state.gt == "true") {
			array.push(this.addRestriction("gt"));
		}
		if (this.state.lt == "true") {
			array.push(this.addRestriction("lt"));
		}
		if (this.state.eq == "true") {
			array.push(this.addRestriction("eq"));
		}
		return array;
	}
	
	subRestriction(cond) {
		this.setState({[cond]: "false"});
	}
	
	addNewRestriction() {
		var addButton = document.getElementById("addRestriction");
		addButton.style.display = "none";
		
		if (!(this.state.gt == "true") && !(this.props.dataString)) {
			this.setState( {gt: "true"});
			this.forceUpdate();
			return;
		}
		if (!(this.state.lt == "true") && !(this.props.dataString)) {
			this.setState({lt: "true"});
			this.forceUpdate()
			return;
		}
		if (!(this.state.eq == "true")) {
			this.setState({eq: "true"});
			this.forceUpdate()
			return;
		}
	}
	
	deselectAll = () => {
		this.subRestriction("gt");
		this.subRestriction("lt");
		this.subRestriction("eq");
	}
	
	saveRestrictions() {
		console.log("ayy");
	}
	

    render() {
        return (
		<div id="editAttributePopupMenu">
			<div id="editHeader">
				<a>{this.props.field}</a> &nbsp;
				<i>{this.props.dataString ? "(string)" : "(number)"}</i>
			</div>
			<br/>
			<div id="currentRestrictionsContainer">
				<div id="restrictionList">
					<button id="addRestriction" onClick={this.addNewRestriction}>+</button>
					{this.buildRestrictionsList()} 
					<ul id="restrictionList"/>
				</div>
				<br/>
				<button className="btn-primary" onClick={this.saveRestrictions()}>Save</button> &nbsp;
				<button className="btn-reset" onClick={this.deselectAll}>Reset</button> &nbsp;
			</div>
		</div>
        )
    }
}

export default AddAttributePopup
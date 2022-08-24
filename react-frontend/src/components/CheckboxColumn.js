import React from "react";

const ReadOnlyRow = ({ array }) => {
  return (
    <tr>
      <td>{array.OPTIONS}</td>
      <td>{contact.recent_team}</td>
      <td>{contact.season}</td>
	  <td>{contact.week}</td>
	  
	  <td>{contact.completions}</td>
	  <td>{contact.attempts}</td>
	  <td>{contact.passing_yards}</td>
	  <td>{contact.passing_tds}</td>
	  <td>{contact.interceptions}</td>
	  <td>{contact.sacks}</td>
	  <td>{contact.sack_yards}</td>
	  <td>{contact.sack_fumbles}</td>
	  <td>{contact.sack_fumbles_lost}</td>
	  <td>{contact.passing_air_yards}</td>
	  <td>{contact.passing_yards_after_catch}</td>
	  <td>{contact.passing_first_downs}</td>
	  <td>{contact.passing_epa}</td>
	  <td>{contact.passing_2pt_conversions}</td>
	  <td>{contact.pacr}</td>
	  <td>{contact.carries}</td>
	  
	  <td>{contact.rushing_yards}</td>
	  <td>{contact.rushing_tds}</td>
	  <td>{contact.rushing_fumbles}</td>
	  <td>{contact.rushing_fumbles_lost}</td>
	  <td>{contact.rushing_first_downs}</td>
	  <td>{contact.rushing_epa}</td>
	  <td>{contact.rushing_2pt_conversions}</td>
	  <td>{contact.receptions}</td>
	  <td>{contact.targets}</td>
	  <td>{contact.receiving_yards}</td>
	  <td>{contact.receiving_tds}</td>
	  <td>{contact.receiving_fumbles}</td>
	  <td>{contact.receiving_fumbles_lost}</td>
	  <td>{contact.receiving_air_yards}</td>
	  <td>{contact.receiving_yards_after_catch}</td>
	  <td>{contact.receiving_first_downs}</td>
	  <td>{contact.receiving_epa}</td>
	  <td>{contact.receiving_2pt_conversions}</td>
	  <td>{contact.racr}</td>
	  <td>{contact.target_share}</td>
	  <td>{contact.air_yards_share}</td>
	  
	  <td>{contact.wopr}</td>
	  <td>{contact.special_teams_tds}</td>
	  <td>{contact.fantasy_points}</td>
	  <td>{contact.fantasy_points_ppr}</td>
    </tr>
  );
};

export default ReadOnlyRow;

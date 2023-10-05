import React, { useState } from "react";

import { createClient } from "@supabase/supabase-js";
const supabase = createClient(
  "https://abdulkcysybmhiqbcmsl.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiZHVsa2N5c3libWhpcWJjbXNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ3ODQ1MzgsImV4cCI6MjAxMDM2MDUzOH0.EgEFvZ56mXm5kP1_9N_wvKk6fTvKSj9gL-ta26H9DzA"
);

// ///////////////////////////////////////////////////////////////  MAIN FUNCTION HERE
export default function SearchForm() {
  const [name, setName] = useState("");
  const [minHeight, setMinHeight] = useState("");
  const [maxHeight, setMaxHeight] = useState("");
  const [minWeight, setMinWeight] = useState("");
  const [maxWeight, setMaxWeight] = useState("");
  const [position, setPosition] = useState("");
  const [nationality, setNationality] = useState("");
  const [preferredFoot, setPreferredFoot] = useState("");
  const [minMarketValue, setMinMarketValue] = useState("");
  const [maxMarketValue, setMaxMarketValue] = useState("");
  const [minWeeklyWage, setMinWeeklyWage] = useState("");
  const [maxWeeklyWage, setMaxWeeklyWage] = useState("");
  const [skillMoves, setSkillMoves] = useState("");

  const [results, setResults] = useState();

  const fetchData = async () => {
    let queryBuilder = supabase.from("scoutF20").select("*");

    if (name !== "") {
      queryBuilder = queryBuilder.ilike("long_name", `%${name}%`);
    }
    if (minHeight) {
      queryBuilder = queryBuilder.gt("height_cm", minHeight);
    }
    if (maxHeight) {
      queryBuilder = queryBuilder.lt("height_cm", maxHeight);
    }
    if (minWeight) {
      queryBuilder = queryBuilder.gt("weight_kg", minWeight);
    }
    if (maxWeight) {
      queryBuilder = queryBuilder.lt("weight_kg", maxWeight);
    }
    if (position) {
      queryBuilder = queryBuilder.ilike("player_positions", `%${position}%`);
    }
    if (nationality) {
      queryBuilder = queryBuilder.ilike("nationality", `%${nationality}%`);
    }
    if (preferredFoot) {
      queryBuilder = queryBuilder.ilike("preferred_foot", `%${preferredFoot}%`);
    }
    if (minMarketValue) {
      queryBuilder = queryBuilder.gt("value_eur", minMarketValue);
    }
    if (maxMarketValue) {
      queryBuilder = queryBuilder.lt("value_eur", maxMarketValue);
    }
    if (minWeeklyWage) {
      queryBuilder = queryBuilder.gt("wage_eur", minWeeklyWage);
    }
    if (maxWeeklyWage) {
      queryBuilder = queryBuilder.lt("wage_eur", maxWeeklyWage);
    }
    if (skillMoves) {
      queryBuilder = queryBuilder.gte("skill_moves", skillMoves);
    }

    try {
      const { data: playahs, error } = await queryBuilder;

      if (playahs) {
        // console.log(playahs);
        setResults(playahs.slice(0, 48));
      } else {
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  function resetForm() {
    setName("");
    setMinHeight("");
    setMaxHeight("");
    setMinWeight("");
    setMaxWeight("");
    setPosition("");
    setNationality("");
    setPreferredFoot("");
    setMinMarketValue("");
    setMaxMarketValue("");
    setMinWeeklyWage("");
    setMaxWeeklyWage("");
    setSkillMoves("");
  }

  return (
    <>
      <div className="container mt-2 mb-0 bg-primary bg-gradient rounded-top-4 border-black border">
        <div className="p-5 text-center rounded-3 bg-primary bg-gradient">
          <h1 className="text-body-emphasis">FIFA 20 Scouter</h1>
          <p className="lead">
            F20Scouter provides you with player search capabilties, powered by a
            million datapoint AI model.
            <br />
            Whether you are Real in need of a ST, or Wrexham looking for a CDM,
            we got you!
            <br />
            We predict and recommend the best solutions to your current AND
            future club needs.
            <br />
            We'll make you an offer you will not refuse.
          </p>
        </div>
      </div>
      <div className="container text-center mt-0 py-3 bg-success bg-gradient text-white border-black border">
        <div className="row">
          <div className="col">
            <label>Name</label>
          </div>
          <div className="col">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label>Min Height (cm)</label>
          </div>
          <div className="col">
            <input
              type="number"
              step="10"
              value={minHeight}
              onChange={(e) => setMinHeight(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label>Max Height (cm)</label>
          </div>
          <div className="col">
            <input
              type="number"
              step="10"
              value={maxHeight}
              onChange={(e) => setMaxHeight(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label>Min Weight (kg)</label>
          </div>
          <div className="col">
            <input
              type="number"
              step="5"
              value={minWeight}
              onChange={(e) => setMinWeight(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label>Max Weight (kg)</label>
          </div>
          <div className="col">
            <input
              type="number"
              step="5"
              value={maxWeight}
              onChange={(e) => setMaxWeight(e.target.value)}
            />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label>Position</label>
          </div>
          <div className="col">
            <select
              className="form-select text-center"
              style={{ width: "36%", display: "inline-block" }}
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            >
              <option value=""></option>
              <option value="GK">GK</option>
              <option value="RB">RB</option>
              <option value="RWB">RWB</option>
              <option value="SW">SW</option>
              <option value="CB">CB</option>
              <option value="LB">LB</option>
              <option value="LWB">LWB</option>
              <option value="CDM">CDM</option>
              <option value="CM">CM</option>
              <option value="RM">RM</option>
              <option value="LM">LM</option>
              <option value="RAM">RAM</option>
              <option value="LAM">LAM</option>
              <option value="CAM">CAM</option>
              <option value="RW">RW</option>
              <option value="LW">LW</option>
              <option value="CF">CF</option>
              <option value="RF">RF</option>
              <option value="LF">LF</option>
              <option value="ST">ST</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label>Nationality</label>
          </div>
          <div className="col">
            <select
              className="form-select text-center"
              style={{ width: "36%", display: "inline-block" }}
              value={nationality}
              onChange={(e) => setNationality(e.target.value)}
            >
              <option value=""></option>
              <option value="Argentina">Argentina</option>
              <option value="France">France</option>
              <option value="Brazil">Brazil</option>
              <option value="England">England</option>
              <option value="Belgium">Belgium</option>
              <option value="Croatia">Croatia</option>
              <option value="Netherlands">Netherlands</option>
              <option value="Portugal">Portugal</option>
              <option value="Italy">Italy</option>
              <option value="Spain">Spain</option>
              <option value="United States">United States</option>
              <option value="Mexico">Mexico</option>
              <option value="Morocco">Morocco</option>
              <option value="Switzerland">Switzerland</option>
              <option value="Germany">Germany</option>
              <option value="Colombia">Colombia</option>
              <option value="Uruguay">Uruguay</option>
              <option value="Denmark">Denmark</option>
              <option value="Japan">Japan</option>
              <option value="Senegal">Senegal</option>
              <option value="Afghanistan">Afghanistan</option>
              <option value="Albania">Albania</option>
              <option value="Algeria">Algeria</option>
              <option value="Angola">Angola</option>
              <option value="Antigua & Barbuda">Antigua & Barbuda</option>
              <option value="Armenia">Armenia</option>
              <option value="Australia">Australia</option>
              <option value="Austria">Austria</option>
              <option value="Azerbaijan">Azerbaijan</option>
              <option value="Bahrain">Bahrain</option>
              <option value="Barbados">Barbados</option>
              <option value="Belize">Belize</option>
              <option value="Benin">Benin</option>
              <option value="Bermuda">Bermuda</option>
              <option value="Bolivia">Bolivia</option>
              <option value="Bosnia Herzegovina">Bosnia Herzegovina</option>
              <option value="Bulgaria">Bulgaria</option>
              <option value="Burkina Faso">Burkina Faso</option>
              <option value="Burundi">Burundi</option>
              <option value="Cameroon">Cameroon</option>
              <option value="Canada">Canada</option>
              <option value="Cape Verde">Cape Verde</option>
              <option value="Central African Rep.">Central African Rep.</option>
              <option value="Chad">Chad</option>
              <option value="Chile">Chile</option>
              <option value="China PR">China PR</option>
              <option value="Chinese Taipei">Chinese Taipei</option>
              <option value="Comoros">Comoros</option>
              <option value="Congo">Congo</option>
              <option value="Costa Rica">Costa Rica</option>
              <option value="Cuba">Cuba</option>
              <option value="Curacao">Curacao</option>
              <option value="Cyprus">Cyprus</option>
              <option value="Czech Republic">Czech Republic</option>
              <option value="Dominican Republic">Dominican Republic</option>
              <option value="DR Congo">DR Congo</option>
              <option value="Ecuador">Ecuador</option>
              <option value="Egypt">Egypt</option>
              <option value="El Salvador">El Salvador</option>
              <option value="Equatorial Guinea">Equatorial Guinea</option>
              <option value="Eritrea">Eritrea</option>
              <option value="Estonia">Estonia</option>
              <option value="Ethiopia">Ethiopia</option>
              <option value="Faroe Islands">Faroe Islands</option>
              <option value="Finland">Finland</option>
              <option value="FYR Macedonia">FYR Macedonia</option>
              <option value="Gabon">Gabon</option>
              <option value="Gambia">Gambia</option>
              <option value="Georgia">Georgia</option>
              <option value="Ghana">Ghana</option>
              <option value="Gibraltar">Gibraltar</option>
              <option value="Greece">Greece</option>
              <option value="Grenada">Grenada</option>
              <option value="Guam">Guam</option>
              <option value="Guatemala">Guatemala</option>
              <option value="Guinea">Guinea</option>
              <option value="Guinea Bissau">Guinea Bissau</option>
              <option value="Guyana">Guyana</option>
              <option value="Haiti">Haiti</option>
              <option value="Honduras">Honduras</option>
              <option value="Hong Kong">Hong Kong</option>
              <option value="Hungary">Hungary</option>
              <option value="Iceland">Iceland</option>
              <option value="India">India</option>
              <option value="Indonesia">Indonesia</option>
              <option value="Iran">Iran</option>
              <option value="Iraq">Iraq</option>
              <option value="Israel">Israel</option>
              <option value="Ivory Coast">Ivory Coast</option>
              <option value="Jamaica">Jamaica</option>
              <option value="Jordan">Jordan</option>
              <option value="Kazakhstan">Kazakhstan</option>
              <option value="Kenya">Kenya</option>
              <option value="Korea DPR">Korea DPR</option>
              <option value="Korea Republic">Korea Republic</option>
              <option value="Kosovo">Kosovo</option>
              <option value="Latvia">Latvia</option>
              <option value="Lebanon">Lebanon</option>
              <option value="Liberia">Liberia</option>
              <option value="Libya">Libya</option>
              <option value="Liechtenstein">Liechtenstein</option>
              <option value="Lithuania">Lithuania</option>
              <option value="Luxembourg">Luxembourg</option>
              <option value="Macau">Macau</option>
              <option value="Madagascar">Madagascar</option>
              <option value="Malawi">Malawi</option>
              <option value="Mali">Mali</option>
              <option value="Malta">Malta</option>
              <option value="Mauritania">Mauritania</option>
              <option value="Mauritius">Mauritius</option>
              <option value="Moldova">Moldova</option>
              <option value="Montenegro">Montenegro</option>
              <option value="Montserrat">Montserrat</option>
              <option value="Mozambique">Mozambique</option>
              <option value="Namibia">Namibia</option>
              <option value="New Caledonia">New Caledonia</option>
              <option value="New Zealand">New Zealand</option>
              <option value="Niger">Niger</option>
              <option value="Nigeria">Nigeria</option>
              <option value="Northern Ireland">Northern Ireland</option>
              <option value="Norway">Norway</option>
              <option value="Palestine">Palestine</option>
              <option value="Panama">Panama</option>
              <option value="Paraguay">Paraguay</option>
              <option value="Peru">Peru</option>
              <option value="Philippines">Philippines</option>
              <option value="Poland">Poland</option>
              <option value="Puerto Rico">Puerto Rico</option>
              <option value="Republic of Ireland">Republic of Ireland</option>
              <option value="Romania">Romania</option>
              <option value="Russia">Russia</option>
              <option value="Rwanda">Rwanda</option>
              <option value="Saudi Arabia">Saudi Arabia</option>
              <option value="Scotland">Scotland</option>
              <option value="Serbia">Serbia</option>
              <option value="Sierra Leone">Sierra Leone</option>
              <option value="Slovakia">Slovakia</option>
              <option value="Slovenia">Slovenia</option>
              <option value="South Africa">South Africa</option>
              <option value="South Sudan">South Sudan</option>
              <option value="St Kitts Nevis">St Kitts Nevis</option>
              <option value="St Lucia">St Lucia</option>
              <option value="Sudan">Sudan</option>
              <option value="Suriname">Suriname</option>
              <option value="Sweden">Sweden</option>
              <option value="Syria">Syria</option>
              <option value="Tanzania">Tanzania</option>
              <option value="Thailand">Thailand</option>
              <option value="Togo">Togo</option>
              <option value="Trinidad & Tobago">Trinidad & Tobago</option>
              <option value="Tunisia">Tunisia</option>
              <option value="Turkey">Turkey</option>
              <option value="Uganda">Uganda</option>
              <option value="Ukraine">Ukraine</option>
              <option value="United Arab Emirates">United Arab Emirates</option>
              <option value="Uzbekistan">Uzbekistan</option>
              <option value="Venezuela">Venezuela</option>
              <option value="Vietnam">Vietnam</option>
              <option value="Wales">Wales</option>
              <option value="Zambia">Zambia</option>
              <option value="Zimbabwe">Zimbabwe</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label>Preferred Foot</label>
          </div>
          <div className="col">
            <select
              className="form-select text-center"
              style={{ width: "36%", display: "inline-block" }}
              value={preferredFoot}
              onChange={(e) => setPreferredFoot(e.target.value)}
            >
              <option value="Either">Either</option>
              <option value="Right">Right</option>
              <option value="Left">Left</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label>Min Market Value EUR</label>
          </div>
          <div className="col">
            <input
              type="number"
              step="1000000"
              value={minMarketValue}
              onChange={(e) => setMinMarketValue(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label>Max Market Value EUR</label>
          </div>
          <div className="col">
            <input
              type="number"
              step="1000000"
              value={maxMarketValue}
              onChange={(e) => setMaxMarketValue(e.target.value)}
            />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label>Min Weekly Wage EUR</label>
          </div>
          <div className="col">
            <input
              type="number"
              step="10000"
              value={minWeeklyWage}
              onChange={(e) => setMinWeeklyWage(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label>Max Weekly Wage EUR</label>
          </div>
          <div className="col">
            <input
              type="number"
              step="10000"
              value={maxWeeklyWage}
              onChange={(e) => setMaxWeeklyWage(e.target.value)}
            />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label>Skill Moves</label>
          </div>
          <div className="col">
            <input
              type="number"
              min="1"
              max="5"
              value={skillMoves}
              onChange={(e) => setSkillMoves(e.target.value)}
            />
          </div>
        </div>

        {/* <div className="row">
        <div className="col">
          <label>Speciality</label>
        </div>
        <div className="col">
          <select
            className="form-select text-center"
            style={{ width: "36%", display: "inline-block" }}
            onChange={(e) => setSpeciality(e.target.value)}
          >
            <option value=""></option>
            <option value="Poacher">Poacher</option>
            <option value="Speedster">Speedster</option>
            <option value="Aerial threat">Aerial threat</option>
            <option value="Dribbler">Dribbler</option>
            <option value="Playmaker">Playmaker</option>
            <option value="Engine">Engine</option>
            <option value="Distance shooter">Distance shooter</option>
            <option value="Crosser">Crosser</option>
            <option value="FK Specialist">FK Specialist</option>
            <option value="Tackling">Tackling</option>
            <option value="Tactician">Tactician</option>
            <option value="Acrobat">Acrobat</option>
            <option value="Strength">Strength</option>
            <option value="Clinical Finisher">Clinical Finisher</option>
            <option value="Complete Defender">Complete Defender</option>
            <option value="Complete Midfielder">Complete Midfielder</option>
            <option value="Complete Forward">Complete Forward</option>
          </select>
        </div>
      </div> */}

        <div className="row">
          <div className="col">
            <select
              className="form-select text-center"
              style={{ width: "36%", display: "inline-block" }}
            >
              <option value="acceleration">Acceleration</option>
              <option value="aggression">Aggression</option>
              <option value="agility">Agility</option>
              <option value="positioning">Att. Position</option>
              <option value="balance">Balance</option>
              <option value="ballcontrol">Ball Control</option>
              <option value="composure">Composure</option>
              <option value="crossing">Crossing</option>
              <option value="curve">Curve</option>
              <option value="dribbling">Dribbling</option>
              <option value="freekickaccuracy">FK Acc.</option>
              <option value="finishing">Finishing</option>
              <option value="gkdiving">GK Diving</option>
              <option value="gkhandling">GK Handling</option>
              <option value="gkkicking">GK Kicking</option>
              <option value="gkpositioning">GK Positioning</option>
              <option value="gkreflexes">GK Reflexes</option>
              <option value="growth">Growth</option>
              <option value="headingaccuracy">Heading</option>
              <option value="interceptions">Interceptions</option>
              <option value="jumping">Jumping</option>
              <option value="longpassing">Long Pass</option>
              <option value="longshots">Long Shots</option>
              <option value="marking">Marking</option>
              <option value="overallrating">Overall Rating</option>
              <option value="penalties">Penalties</option>
              <option value="potential">Potential</option>
              <option value="reactions">Reactions</option>
              <option value="shortpassing">Short Pass</option>
              <option value="shotpower">Shot Power</option>
              <option value="slidingtackle">Slide Tackle</option>
              <option value="sprintspeed">Sprint Speed</option>
              <option value="stamina">Stamina</option>
              <option value="standingtackle">Stand Tackle</option>
              <option value="strength">Strength</option>
              <option value="vision">Vision</option>
              <option value="volleys">Volleys</option>
            </select>
          </div>
          <div className="col">
            <input
              type="number"
              style={{ width: "18%" }}
            />
            <input
              type="number"
              style={{ width: "18%" }}
            />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <select
              className="form-select text-center"
              style={{ width: "36%", display: "inline-block" }}
            >
              <option value="acceleration">Acceleration</option>
              <option value="aggression">Aggression</option>
              <option value="agility">Agility</option>
              <option value="positioning">Att. Position</option>
              <option value="balance">Balance</option>
              <option value="ballcontrol">Ball Control</option>
              <option value="composure">Composure</option>
              <option value="crossing">Crossing</option>
              <option value="curve">Curve</option>
              <option value="dribbling">Dribbling</option>
              <option value="freekickaccuracy">FK Acc.</option>
              <option value="finishing">Finishing</option>
              <option value="gkdiving">GK Diving</option>
              <option value="gkhandling">GK Handling</option>
              <option value="gkkicking">GK Kicking</option>
              <option value="gkpositioning">GK Positioning</option>
              <option value="gkreflexes">GK Reflexes</option>
              <option value="growth">Growth</option>
              <option value="headingaccuracy">Heading</option>
              <option value="interceptions">Interceptions</option>
              <option value="jumping">Jumping</option>
              <option value="longpassing">Long Pass</option>
              <option value="longshots">Long Shots</option>
              <option value="marking">Marking</option>
              <option value="overallrating">Overall Rating</option>
              <option value="penalties">Penalties</option>
              <option value="potential">Potential</option>
              <option value="reactions">Reactions</option>
              <option value="shortpassing">Short Pass</option>
              <option value="shotpower">Shot Power</option>
              <option value="slidingtackle">Slide Tackle</option>
              <option value="sprintspeed">Sprint Speed</option>
              <option value="stamina">Stamina</option>
              <option value="standingtackle">Stand Tackle</option>
              <option value="strength">Strength</option>
              <option value="vision">Vision</option>
              <option value="volleys">Volleys</option>
            </select>
          </div>
          <div className="col">
            <input
              type="number"
              style={{ width: "18%" }}
            />
            <input
              type="number"
              style={{ width: "18%" }}
            />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <select
              className="form-select text-center"
              style={{ width: "36%", display: "inline-block" }}
            >
              <option value="acceleration">Acceleration</option>
              <option value="aggression">Aggression</option>
              <option value="agility">Agility</option>
              <option value="positioning">Att. Position</option>
              <option value="balance">Balance</option>
              <option value="ballcontrol">Ball Control</option>
              <option value="composure">Composure</option>
              <option value="crossing">Crossing</option>
              <option value="curve">Curve</option>
              <option value="dribbling">Dribbling</option>
              <option value="freekickaccuracy">FK Acc.</option>
              <option value="finishing">Finishing</option>
              <option value="gkdiving">GK Diving</option>
              <option value="gkhandling">GK Handling</option>
              <option value="gkkicking">GK Kicking</option>
              <option value="gkpositioning">GK Positioning</option>
              <option value="gkreflexes">GK Reflexes</option>
              <option value="growth">Growth</option>
              <option value="headingaccuracy">Heading</option>
              <option value="interceptions">Interceptions</option>
              <option value="jumping">Jumping</option>
              <option value="longpassing">Long Pass</option>
              <option value="longshots">Long Shots</option>
              <option value="marking">Marking</option>
              <option value="overallrating">Overall Rating</option>
              <option value="penalties">Penalties</option>
              <option value="potential">Potential</option>
              <option value="reactions">Reactions</option>
              <option value="shortpassing">Short Pass</option>
              <option value="shotpower">Shot Power</option>
              <option value="slidingtackle">Slide Tackle</option>
              <option value="sprintspeed">Sprint Speed</option>
              <option value="stamina">Stamina</option>
              <option value="standingtackle">Stand Tackle</option>
              <option value="strength">Strength</option>
              <option value="vision">Vision</option>
              <option value="volleys">Volleys</option>
            </select>
          </div>
          <div className="col">
            <input
              type="number"
              style={{ width: "18%" }}
            />
            <input
              type="number"
              style={{ width: "18%" }}
            />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <select
              className="form-select text-center"
              style={{ width: "36%", display: "inline-block" }}
            >
              <option value="acceleration">Acceleration</option>
              <option value="aggression">Aggression</option>
              <option value="agility">Agility</option>
              <option value="positioning">Att. Position</option>
              <option value="balance">Balance</option>
              <option value="ballcontrol">Ball Control</option>
              <option value="composure">Composure</option>
              <option value="crossing">Crossing</option>
              <option value="curve">Curve</option>
              <option value="dribbling">Dribbling</option>
              <option value="freekickaccuracy">FK Acc.</option>
              <option value="finishing">Finishing</option>
              <option value="gkdiving">GK Diving</option>
              <option value="gkhandling">GK Handling</option>
              <option value="gkkicking">GK Kicking</option>
              <option value="gkpositioning">GK Positioning</option>
              <option value="gkreflexes">GK Reflexes</option>
              <option value="growth">Growth</option>
              <option value="headingaccuracy">Heading</option>
              <option value="interceptions">Interceptions</option>
              <option value="jumping">Jumping</option>
              <option value="longpassing">Long Pass</option>
              <option value="longshots">Long Shots</option>
              <option value="marking">Marking</option>
              <option value="overallrating">Overall Rating</option>
              <option value="penalties">Penalties</option>
              <option value="potential">Potential</option>
              <option value="reactions">Reactions</option>
              <option value="shortpassing">Short Pass</option>
              <option value="shotpower">Shot Power</option>
              <option value="slidingtackle">Slide Tackle</option>
              <option value="sprintspeed">Sprint Speed</option>
              <option value="stamina">Stamina</option>
              <option value="standingtackle">Stand Tackle</option>
              <option value="strength">Strength</option>
              <option value="vision">Vision</option>
              <option value="volleys">Volleys</option>
            </select>
          </div>
          <div className="col">
            <input
              type="number"
              style={{ width: "18%" }}
            />
            <input
              type="number"
              style={{ width: "18%" }}
            />
          </div>
        </div>

        <button
          className="btn btn-info mt-2 mb-1 mx-3"
          onClick={fetchData}
        >
          AllFather Give Me Sight
        </button>
        <button
          className="btn btn-warning mt-2 mb-1 mx-3"
          onClick={resetForm}
        >
          Setting A Portal
        </button>
      </div>

      <div className="album py-0">
        <div className="container pb-4 mb-3 bg-primary-subtle rounded-bottom-5 border-black border">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3 bg-primary-subtle mt-0">
            {results ? (
              results.map((teammate) => (
                <div
                  className="col"
                  key={teammate.sofifa_id}
                >
                  <div className="card shadow-sm">
                    <div className="card-body px-4">
                      <div className="card-text lead mb-2 fw-semibold">
                        {teammate.long_name}
                      </div>
                      <div style={{ display: "flex" }}>
                        <div
                          style={{ width: "50%" }}
                          className="fw-medium"
                        >
                          <div
                            style={{
                              margin: "5px",
                              borderRadius: "3px",
                              backgroundColor:
                                teammate.pace > 89
                                  ? "#239454"
                                  : 79 < teammate.pace && teammate.pace < 90
                                  ? "#8DC153"
                                  : 65 < teammate.pace && teammate.pace < 80
                                  ? "#F6BB43"
                                  : 49 < teammate.pace && teammate.pace < 66
                                  ? "#E77E23"
                                  : "#E9573E",
                            }}
                          >
                            &nbsp;&nbsp;&nbsp;PAC&nbsp;&nbsp;{teammate.pace}
                            &nbsp;&nbsp;
                          </div>

                          <div
                            style={{
                              margin: "5px",
                              borderRadius: "3px",
                              backgroundColor:
                                teammate.shooting > 89
                                  ? "#239454"
                                  : 79 < teammate.shooting &&
                                    teammate.shooting < 90
                                  ? "#8DC153"
                                  : 65 < teammate.shooting &&
                                    teammate.shooting < 80
                                  ? "#F6BB43"
                                  : 49 < teammate.shooting &&
                                    teammate.shooting < 66
                                  ? "#E77E23"
                                  : "#E9573E",
                            }}
                          >
                            &nbsp;&nbsp;&nbsp;SHO&nbsp;&nbsp;{teammate.shooting}
                            &nbsp;&nbsp;
                          </div>

                          <div
                            style={{
                              margin: "5px",
                              borderRadius: "3px",
                              backgroundColor:
                                teammate.passing > 89
                                  ? "#239454"
                                  : 79 < teammate.passing &&
                                    teammate.passing < 90
                                  ? "#8DC153"
                                  : 65 < teammate.passing &&
                                    teammate.passing < 80
                                  ? "#F6BB43"
                                  : 49 < teammate.passing &&
                                    teammate.passing < 66
                                  ? "#E77E23"
                                  : "#E9573E",
                            }}
                          >
                            &nbsp;&nbsp;&nbsp;PAS&nbsp;&nbsp;{teammate.passing}
                            &nbsp;&nbsp;
                          </div>
                        </div>
                        <div
                          style={{ width: "50%" }}
                          className="fw-medium"
                        >
                          <div
                            style={{
                              margin: "5px",
                              borderRadius: "3px",
                              backgroundColor:
                                teammate.dribbling > 89
                                  ? "#239454"
                                  : 79 < teammate.dribbling &&
                                    teammate.dribbling < 90
                                  ? "#8DC153"
                                  : 65 < teammate.dribbling &&
                                    teammate.dribbling < 80
                                  ? "#F6BB43"
                                  : 49 < teammate.dribbling &&
                                    teammate.dribbling < 66
                                  ? "#E77E23"
                                  : "#E9573E",
                            }}
                          >
                            &nbsp;&nbsp;&nbsp;DRI&nbsp;&nbsp;
                            {teammate.dribbling}
                            &nbsp;&nbsp;
                          </div>

                          <div
                            style={{
                              margin: "5px",
                              borderRadius: "3px",
                              backgroundColor:
                                teammate.defending > 89
                                  ? "#239454"
                                  : 79 < teammate.defending &&
                                    teammate.defending < 90
                                  ? "#8DC153"
                                  : 65 < teammate.defending &&
                                    teammate.defending < 80
                                  ? "#F6BB43"
                                  : 49 < teammate.defending &&
                                    teammate.defending < 66
                                  ? "#E77E23"
                                  : "#E9573E",
                            }}
                          >
                            &nbsp;&nbsp;&nbsp;DEF&nbsp;&nbsp;
                            {teammate.defending}
                            &nbsp;&nbsp;
                          </div>

                          <div
                            style={{
                              margin: "5px",
                              borderRadius: "3px",
                              backgroundColor:
                                teammate.physic > 89
                                  ? "#239454"
                                  : 79 < teammate.physic && teammate.physic < 90
                                  ? "#8DC153"
                                  : 65 < teammate.physic && teammate.physic < 80
                                  ? "#F6BB43"
                                  : 49 < teammate.physic && teammate.physic < 66
                                  ? "#E77E23"
                                  : "#E9573E",
                            }}
                          >
                            &nbsp;&nbsp;&nbsp;PHY&nbsp;&nbsp;{teammate.physic}
                            &nbsp;&nbsp;
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center mx-auto px-auto lead">
                Pierce Through The Mundane
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="container bg-dark-subtle mt-0 rounded">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 mb-4 border-top">
          <p className="col-md-4 mb-0 text-body-secondary lead">
            By Uzman Qaisar
          </p>
        </footer>
      </div>
    </>
  );
}

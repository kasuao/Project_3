import React from "react";


const CategoryLayout = props =>


	<div className="CategoryLayout">

		<div class="panel panel-default">
  		<div class="panel-heading">
 				 <h2>Fishing at Provo River</h2>

    			<h3 class="panel-title"></h3>
    		
    			<h4 className="tagline">{props.tagline}</h4>
  

       </div>
    <div class="panel-body">
    type specimen book. It has survived not only five centuries, 
					 but also the leap into electronic typesetting, remaining 
					 essentially unchanged. It was popularised in the 1960s with
					  the release of Letraset sheets containing Lorem Ipsum 
					  passages, and more recently with desktop publishing software 
					  like Aldus PageMaker including versions of Lorem Ipsum.
					  
					 type specimen book. It has survived not only five centuries, 
					 but also the leap into electronic typesetting, remaining 
					 essentially unchanged. It was popularised in the 1960s with
					  the release of Letraset sheets containing Lorem Ipsum 
					  passages, and more recently with desktop publishing software 
					  like Aldus PageMaker including versions of Lorem Ipsum.
    <img class="thumbnail" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAk
    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" />
  </div>

</div>
					
		<div class="panel panel-default">
  <div class="panel-heading">
  <h2>My EPIC TRAIL RIDE</h2>
    <h3 class="panel-title">{props.userName}</h3>
  </div>
  <div class="panel-body">
    type specimen book. It has survived not only five centuries, 
					 but also the leap into electronic typesetting, remaining 
					 essentially unchanged. It was popularised in the 1960s with
					  the release of Letraset sheets containing Lorem Ipsum 
					  passages, and more recently with desktop publishing software 
					  like Aldus PageMaker including versions of Lorem Ipsum.
					  
					 type specimen book. It has survived not only five centuries, 
					 but also the leap into electronic typesetting, remaining 
					 essentially unchanged. It was popularised in the 1960s with
					  the release of Letraset sheets containing Lorem Ipsum 
					  passages, and more recently with desktop publishing software 
					  like Aldus PageMaker including versions of Lorem Ipsum.
    <img class="thumbnail" src="http://placehold.it/200x150" />
  </div>

</div>

<div class="panel panel-default">
  <div class="panel-heading">
  <h2>My Lake Blanche Adventure</h2>
    <h3 class="panel-title">Posted by: adventureBoy345</h3>
  </div>
  <div class="panel-body">
    type specimen book. It has survived not only five centuries, 
					 but also the leap into electronic typesetting, remaining 
					 essentially unchanged. It was popularised in the 1960s with
					  the release of Letraset sheets containing Lorem Ipsum 
					  passages, and more recently with desktop publishing software 
					  like Aldus PageMaker including versions of Lorem Ipsum.

					 type specimen book. It has survived not only five centuries, 
					 but also the leap into electronic typesetting, remaining 
					 essentially unchanged. It was popularised in the 1960s with
					  the release of Letraset sheets containing Lorem Ipsum 
					  passages, and more recently with desktop publishing software 
					  like Aldus PageMaker including versions of Lorem Ipsum.
    <img class="thumbnail" src="http://placehold.it/200x150" />
  </div>

</div>


			</div>;


 		 	  


export default CategoryLayout;
ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:2951").setExtent([373001.135657, 5051118.797626, 373970.427949, 5051893.276492]);
var wms_layers = [];

var format_Points_inter_0 = new ol.format.GeoJSON();
var features_Points_inter_0 = format_Points_inter_0.readFeatures(json_Points_inter_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2951'});
var jsonSource_Points_inter_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Points_inter_0.addFeatures(features_Points_inter_0);cluster_Points_inter_0 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Points_inter_0
});
var lyr_Points_inter_0 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Points_inter_0, 
                style: style_Points_inter_0,
                interactive: true,
                title: '<img src="styles/legend/Points_inter_0.png" /> Points_inter'
            });

lyr_Points_inter_0.setVisible(true);
var layersList = [lyr_Points_inter_0];
lyr_Points_inter_0.set('fieldAliases', {'id': 'id', 'Nom': 'Nom', 'Adresse': 'Adresse', 'No_tel': 'No_tel', 'Village': 'Village', 'Dist_elec': 'Dist_elec', 'X': 'X', 'Y': 'Y', 'Catégorie': 'Catégorie', 'Site_web': 'Site_web', 'Domaine': 'Domaine', 'Image': 'Image', });
lyr_Points_inter_0.set('fieldImages', {'id': 'TextEdit', 'Nom': 'TextEdit', 'Adresse': 'TextEdit', 'No_tel': 'TextEdit', 'Village': 'ValueMap', 'Dist_elec': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Catégorie': 'ValueMap', 'Site_web': 'TextEdit', 'Domaine': '', 'Image': '', });
lyr_Points_inter_0.set('fieldLabels', {'id': 'no label', 'Nom': 'header label', 'Adresse': 'inline label', 'No_tel': 'inline label', 'Village': 'inline label', 'Dist_elec': 'inline label', 'X': 'no label', 'Y': 'no label', 'Catégorie': 'inline label', 'Site_web': 'inline label', 'Domaine': 'no label', 'Image': 'inline label', });
lyr_Points_inter_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
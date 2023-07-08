import React, { useState } from 'react';
import { View, Text, TouchableOpacity, LayoutAnimation, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const Accordion = ({ iconName, description, image, isExpanded, onExpand }) => {
  const handleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    onExpand();
  };

  const containerStyle = [
    styles.container,
    isExpanded ? styles.expandedContainer : styles.collapsedContainer,
  ];

  const iconStyle = [
    styles.icon,
    isExpanded ? styles.iconExpanded : styles.iconCollapsed,
  ];

  const descriptionStyle = [
    isExpanded ? styles.descriptionExpanded : styles.descriptionCollapsed,
  ];

  return (
    <TouchableOpacity style={containerStyle} onPress={handleExpand}>
        <LinearGradient
            colors={['rgba(50, 50, 50, 0.9)', 'rgba(255, 255, 255, 1)']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.gradient}
        >
            <View style={styles.rowContainer}>
                <Ionicons name={iconName} size={24} style={iconStyle}/>
                {isExpanded && (
                  <LinearGradient
                  colors={['rgba(50, 50, 50, 0.0)', 'rgba(255, 255, 255, 0)']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.gradient}
              >
                    <View style={descriptionStyle}>
                      <Text style={styles.description}>{description}</Text>
                      {/* <View style={styles.Benefits}>
                        <Text style={styles.description}>Description</Text>
                        <Text style={styles.description}>Description</Text>
                        <Text style={styles.description}>Description</Text>
                      </View>  */}
                    </View>
                  </LinearGradient>
                )}
            </View>
        </LinearGradient>
    </TouchableOpacity>
  );
};


const HorizontalAccordion = () => {
  const accordionData = [
    { iconName: 'language-outline', description: 'Multi-Lingual\nSupport' },
    // { iconName: 'body-outline', description: 'Body Temperature\nPulse Rate\nRespiratory Rate'},
    // { iconName: 'heart-outline', description: 'Heart Rate\nBlood Pressure\nBlood Oxygen' },
    { iconName: 'call-outline', description: 'Telemedication\nPresciption\nMedical Advice' },
    { iconName: 'calendar-outline', description: 'Nutrition \nMedication Management' },
    { iconName: 'medkit-outline', description: 'AI-Driven \nHealth \nRecommendations' },
  ];

  const [expandedIndex, setExpandedIndex] = useState(3);

  const handleAccordionExpand = (index) => {
    setExpandedIndex(index);
  };

  return (
    <View style={styles.containerWrapper}>
      {accordionData.map((accordion, index) => (
        <Accordion
          key={index}
          iconName={accordion.iconName}
          description={accordion.description}
          isExpanded={index === expandedIndex}
          onExpand={() => handleAccordionExpand(index)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  containerWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
  },
  container: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc',
    marginRight: 5,
    borderRadius: 30,
  },
  collapsedContainer: {
    width: 40,
  },
  expandedContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  icon: {
    color: '#86efac',
    padding: 8,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
  },
  iconExpanded: {
    marginLeft: -10,
    // backgroundColor: '#f2f2f2',
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  iconCollapsed: {
    marginLeft: -10,
    // backgroundColor: '#ccc',
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    color: 'black',
  },
  description: {
    fontSize: 18,
    color: '#86efac',
    fontWeight: 'medium',
  },
  descriptionExpanded: {
    backgroundColor: 'transparent',
    flex: 1,
    height: '100%',
    width: '100%',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    alignItems: 'left',
    justifyContent: 'center',
  },
  descriptionCollapsed: {
    display: 'none',
  },
  gradient: {
      flex: 1,
      borderRadius: 30,
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
  },
  Benefits: {
    paddingLeft: 20,
  }
});

export default HorizontalAccordion;

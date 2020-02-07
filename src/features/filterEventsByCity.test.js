import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';

const feature = loadFeature('./src/features/filterEventsByCity.feature');

defineFeature(feature, test => {

    test('By default, when user hasn’t searched for a city, show upcoming events based on the user’s location', ({ given, when, then }) => {
    	given('user hasn’t searched for any city', () => {

    	});
        let AppWrapper;
        when('the user opens the app', () => {
          AppWrapper = mount(<App />);
        });

    	then('the user should see the list of upcoming events from their location', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.Event')).toHaveLength(mockEvents.events.length);
          });
        });
        
        test('User should see a list of suggestions when they search for a city', ({ given, when, then }) => {
            given('the main page is open', () => {
    
            });
    
            when('user starts typing in the city textbox', () => {
    
            });
    
            then('the user should receive a list of cities (suggestions) that match what they’ve typed', () => {
    
            });

        });

            test('User can select a city from the suggested list', ({ given, and, when, then }) => {
                given('user was typing “Munich” in the city textbox', () => {
        
                });
        
                and('the list of suggested cities is showing', () => {
        
                });
        
                when('the user selects a city (e.g., “Munich, Germany”) from the list', () => {
        
                });
        
                then('their city should be changed to that city (i.e., “Munich, Germany”)', () => {
        
                });
        
                and('the user should receive a list of upcoming events in that city', () => {
        
                });
            });

        });

import React from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';

export default function PrivacyScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Privacy Policy</Text>
      <Text style={styles.meta}>Last updated: April 2025</Text>

      <Section heading="What this app is">
        This is a personal app built for private use by a single person. It is not
        available to the public and has no other users.
      </Section>

      <Section heading="What data it accesses">
        The app connects to Whoop to read your recovery, sleep, and strain data.
        This data is used only to generate your morning briefing and is never
        transmitted anywhere else.
      </Section>

      <Section heading="Where your data lives">
        All data stays in your browser's localStorage on your own device. Nothing
        is sent to or stored on any server.
      </Section>

      <Section heading="Third parties">
        No data is shared with any third parties. Ever.
      </Section>

      <Section heading="Questions">
        There are none. This is a private app for personal use only.
      </Section>
    </ScrollView>
  );
}

function Section({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <View style={styles.section}>
      <Text style={styles.heading}>{heading}</Text>
      <Text style={styles.body}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0d0d',
  },
  content: {
    padding: 28,
    paddingBottom: 60,
  },
  title: {
    fontFamily: 'DMSerifDisplay_400Regular',
    fontSize: 32,
    color: '#f5f0e8',
    marginBottom: 6,
  },
  meta: {
    fontSize: 13,
    color: '#666',
    marginBottom: 36,
    letterSpacing: 0.3,
  },
  section: {
    marginBottom: 28,
  },
  heading: {
    fontFamily: 'DMSerifDisplay_400Regular',
    fontSize: 18,
    color: '#c9b99a',
    marginBottom: 8,
  },
  body: {
    fontSize: 15,
    color: '#a8a8a8',
    lineHeight: 24,
  },
});

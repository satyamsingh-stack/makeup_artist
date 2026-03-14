# EmailJS Template Code

Copy and paste this code into your EmailJS Template editor.

## Template Name:
Booking Form Notification

## Subject:
New Booking Request from {{from_name}}

## Email Content (HTML):

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f5f5f5;
            padding: 20px;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .header {
            background: linear-gradient(135deg, #ff7e5f, #feb47b);
            color: white;
            padding: 30px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 24px;
        }
        .content {
            padding: 30px;
        }
        .field {
            margin-bottom: 20px;
            padding-bottom: 15px;
            border-bottom: 1px solid #eee;
        }
        .field:last-child {
            border-bottom: none;
        }
        .label {
            font-weight: bold;
            color: #ff7e5f;
            font-size: 14px;
            text-transform: uppercase;
            margin-bottom: 5px;
        }
        .value {
            color: #333;
            font-size: 16px;
        }
        .footer {
            background-color: #f9f9f9;
            padding: 20px;
            text-align: center;
            color: #888;
            font-size: 12px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🎨 New Booking Request</h1>
        </div>
        <div class="content">
            <div class="field">
                <div class="label">Name</div>
                <div class="value">{{from_name}}</div>
            </div>
            <div class="field">
                <div class="label">Email</div>
                <div class="value">{{from_email}}</div>
            </div>
            <div class="field">
                <div class="label">Phone</div>
                <div class="value">{{phone}}</div>
            </div>
            <div class="field">
                <div class="label">Service</div>
                <div class="value">{{service}}</div>
            </div>
            <div class="field">
                <div class="label">Event Date</div>
                <div class="value">{{event_date}}</div>
            </div>
            <div class="field">
                <div class="label">Event Time</div>
                <div class="value">{{event_time}}</div>
            </div>
            <div class="field">
                <div class="label">Event Location</div>
                <div class="value">{{event_location}}</div>
            </div>
            <div class="field">
                <div class="label">Full Message</div>
                <div class="value">{{message}}</div>
            </div>
        </div>
        <div class="footer">
            <p>Anjali Bhasker Makeovers - Thailand's Premier Makeup Artist</p>
            <p>This email was sent from your website booking form</p>
        </div>
    </div>
</body>
</html>
```

## To Email:
```
Satyams0478@gmail.com
```

## Reply-To:
```
{{from_email}}
```

## Template Variables Used:
- `{{from_name}}` - Customer's name
- `{{from_email}}` - Customer's email address
- `{{phone}}` - Customer's phone number
- `{{service}}` - Selected service type
- `{{event_date}}` - Date of the event
- `{{event_time}}` - Time of the event
- `{{event_location}}` - Location of the event
- `{{message}}` - Full message with all booking details

## Settings:
1. **Service**: Select your email service (Gmail, Outlook, etc.)
2. **Template ID**: `template_booking_form`
3. **Subject**: New Booking Request from {{from_name}}
4. **To Email**: Satyams0478@gmail.com

This template will display all the booking form details in a beautiful, professional format when you receive an email notification.